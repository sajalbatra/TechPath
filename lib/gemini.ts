/**
 * This file contains the implementation for calling the Gemini API using the free version.
 */

export async function callGeminiAPI(prompt: string, apiKey: string) {
  try {
    console.log("Calling Gemini API with prompt length:", prompt.length);
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    });

    console.log("Gemini API response status:", response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error response:", JSON.stringify(errorData));
      throw new Error(errorData.error?.message || "Failed to call Gemini API");
    }

    const data = await response.json();
    console.log("Gemini API response structure:", JSON.stringify(Object.keys(data)));
    
    // Check if the expected response structure exists
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
      console.error("Unexpected Gemini API response structure:", JSON.stringify(data));
      throw new Error("Unexpected Gemini API response structure");
    }

    // Extract the text from the response
    const generatedText = data.candidates[0].content.parts[0].text;
    console.log("Generated text (first 100 chars):", generatedText?.substring(0, 100));
    
    if (!generatedText) {
      console.error("No text in Gemini API response");
      throw new Error("No text in Gemini API response");
    }

    // Parse the JSON from the text
    try {
      // Find JSON object in the response
      console.log("Attempting to extract JSON from response");
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
      
      if (jsonMatch) {
        console.log("JSON pattern found, attempting to parse");
        const parsedData = JSON.parse(jsonMatch[0]);
        console.log("Successfully parsed JSON. Keys:", Object.keys(parsedData));
        return parsedData;
      } 
      
      // If no JSON object is found, create a structured JSON from the text
      console.log("No JSON found, converting text response to structured JSON");
      return extractRoadmapFromText(generatedText);
      
    } catch (parseError) {
      console.error("Error parsing Gemini response:", parseError);
      console.log("Attempting to extract structured data from text");
      
      // Fallback to manual extraction if JSON parsing fails
      try {
        return extractRoadmapFromText(generatedText);
      } catch (extractionError) {
        console.error("Failed to extract roadmap data from text:", extractionError);
        console.error("Raw response text:", generatedText);
        throw new Error("Failed to parse roadmap data from Gemini response");
      }
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}

/**
 * Extract roadmap data from text response
 */
function extractRoadmapFromText(text: string) {
  console.log("Extracting roadmap data from text");
  
  // Extract title (usually in the first few lines)
  const title = "Web Development Learning Roadmap";
  
  // Get a description from the beginning of the text
  const descriptionMatch = text.match(/Okay, here's a detailed (.*?) roadmap tailored for (.*?)\./) || 
                          text.match(/.*?(roadmap|learning path|guide).*?(for|to).*?\./) ||
                          ["", ""];
  const description = descriptionMatch[0] || 
    "A detailed web development learning roadmap tailored for beginners who want to build a portfolio.";
  
  // Extract the levels
  const levels = [];
  
  // Check if text contains Level 1, Level 2, etc.
  const levelMatches = text.match(/\*\*Level \d+: (.*?)\*\*[\s\S]*?(?=\*\*Level \d+:|$)/g);
  
  if (levelMatches && levelMatches.length > 0) {
    levelMatches.forEach((levelText, index) => {
      // Extract level title
      const levelTitleMatch = levelText.match(/\*\*Level \d+: (.*?)\*\*/);
      const levelTitle = levelTitleMatch ? levelTitleMatch[1] : `Level ${index + 1}`;
      
      // Determine level ID
      let levelId;
      if (levelTitle.toLowerCase().includes("beginner")) {
        levelId = "beginner";
      } else if (levelTitle.toLowerCase().includes("intermediate")) {
        levelId = "intermediate";
      } else if (levelTitle.toLowerCase().includes("advanced")) {
        levelId = "advanced";
      } else {
        levelId = `level-${index + 1}`;
      }
      
      // Extract skills for this level
      const skillMatches = levelText.match(/\*\*Skill \d+: (.*?)\*\*[\s\S]*?(?=\*\*Skill \d+:|$)/g);
      const skills = [];
      
      if (skillMatches && skillMatches.length > 0) {
        skillMatches.forEach(skillText => {
          // Extract skill name
          const skillNameMatch = skillText.match(/\*\*Skill \d+: (.*?)\*\*/);
          const skillName = skillNameMatch ? skillNameMatch[1] : "Skill";
          
          // Extract resources
          const resourceMatches = skillText.match(/\*\*([^*:]+?):\*\* \[(.*?)\]\((https?:\/\/[^\s)]+)\)/g);
          const resources = [];
          
          if (resourceMatches && resourceMatches.length > 0) {
            resourceMatches.forEach(resourceText => {
              const resourceMatch = resourceText.match(/\*\*([^*:]+?):\*\* \[(.*?)\]\((https?:\/\/[^\s)]+)\)/);
              if (resourceMatch) {
                resources.push({
                  title: resourceMatch[2],
                  url: resourceMatch[3]
                });
              }
            });
          } else {
            // Fallback resources if none found
            resources.push({
              title: "MDN Web Docs",
              url: "https://developer.mozilla.org/en-US/docs/Web"
            });
            resources.push({
              title: "freeCodeCamp",
              url: "https://www.freecodecamp.org/"
            });
          }
          
          skills.push({
            name: skillName,
            resources: resources
          });
        });
      }
      
      // If no skills were found, add a placeholder skill
      if (skills.length === 0) {
        skills.push({
          name: "Core Skills",
          resources: [
            {
              title: "MDN Web Docs",
              url: "https://developer.mozilla.org/en-US/docs/Web"
            },
            {
              title: "freeCodeCamp",
              url: "https://www.freecodecamp.org/"
            }
          ]
        });
      }
      
      levels.push({
        id: levelId,
        title: levelTitle,
        skills: skills
      });
    });
  }
  
  // If no levels were found, create default structure
  if (levels.length === 0) {
    levels.push({
      id: "beginner",
      title: "Beginner Level",
      skills: [
        {
          name: "HTML & CSS",
          resources: [
            {
              title: "MDN Web Docs - HTML",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
            },
            {
              title: "MDN Web Docs - CSS",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
            }
          ]
        },
        {
          name: "JavaScript Fundamentals",
          resources: [
            {
              title: "MDN Web Docs - JavaScript",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
              title: "freeCodeCamp JavaScript Curriculum",
              url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
            }
          ]
        }
      ]
    });
    
    levels.push({
      id: "intermediate",
      title: "Intermediate Level",
      skills: [
        {
          name: "Frontend Framework",
          resources: [
            {
              title: "React Documentation",
              url: "https://react.dev/"
            },
            {
              title: "Scrimba - Learn React",
              url: "https://scrimba.com/learn/learnreact"
            }
          ]
        }
      ]
    });
    
    levels.push({
      id: "advanced",
      title: "Advanced Level",
      skills: [
        {
          name: "Backend Development",
          resources: [
            {
              title: "Node.js Documentation",
              url: "https://nodejs.org/en/docs/"
            },
            {
              title: "Express.js Documentation",
              url: "https://expressjs.com/"
            }
          ]
        }
      ]
    });
  }
  
  console.log("Successfully extracted structured data with levels:", levels.length);
  
  return {
    title,
    description,
    levels
  };
}