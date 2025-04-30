/**
 * This file contains the implementation for calling the Gemini API using the free version.
 */

export async function callGeminiAPI(prompt: string, apiKey: string) {
  try {
    console.log("Calling Gemini API with prompt length:", prompt.length);
    
    // Set a timeout for the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
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
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    console.log("Gemini API response status:", response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error response:", JSON.stringify(errorData));
      throw new Error(errorData.error?.message || "Failed to call Gemini API");
    }

    const data = await response.json();
    
    // Check if the expected response structure exists
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
      console.error("Unexpected Gemini API response structure");
      throw new Error("Unexpected Gemini API response structure");
    }

    // Extract the text from the response
    const generatedText = data.candidates[0].content.parts[0].text;
    if (!generatedText) {
      throw new Error("No text in Gemini API response");
    }

    // Try to find and parse JSON in the response first
    try {
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch (parseError) {
      // If JSON parsing fails, continue to extractRoadmapFromText
      console.error("Error parsing JSON:", parseError);
    }
    
    // If we didn't return a parsed JSON object, extract structured data
    return extractRoadmapFromText(generatedText);
    
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}

/**
 * Extract roadmap data from text response - optimized version
 */
function extractRoadmapFromText(text: string) {
  // Define default structure to avoid complex regex in case of failure
  const defaultRoadmap = {
    title: "Web Development Learning Roadmap",
    description: "A detailed web development learning roadmap tailored for beginners.",
    levels: [
      {
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
      },
      {
        id: "intermediate",
        title: "Intermediate Level",
        skills: [
          {
            name: "Frontend Framework",
            resources: [
              {
                title: "React Documentation",
                url: "https://react.dev/"
              }
            ]
          }
        ]
      }
    ]
  };
  
  try {
    // Extract levels with a simplified approach
    const levelMatches = text.match(/\*\*Level \d+: (.*?)\*\*[\s\S]*?(?=\*\*Level \d+:|$)/g);
    
    if (!levelMatches || levelMatches.length === 0) {
      return defaultRoadmap;
    }
    
    const levels = [];
    
    for (let i = 0; i < Math.min(levelMatches.length, 3); i++) { // Process max 3 levels to avoid timeout
      const levelText = levelMatches[i];
      const levelTitleMatch = levelText.match(/\*\*Level \d+: (.*?)\*\*/);
      const levelTitle = levelTitleMatch ? levelTitleMatch[1] : `Level ${i + 1}`;
      
      let levelId;
      if (levelTitle.toLowerCase().includes("beginner")) {
        levelId = "beginner";
      } else if (levelTitle.toLowerCase().includes("intermediate")) {
        levelId = "intermediate";
      } else if (levelTitle.toLowerCase().includes("advanced")) {
        levelId = "advanced";
      } else {
        levelId = `level-${i + 1}`;
      }
      
      // Extract up to 2 skills per level to avoid timeout
      const skillMatches = levelText.match(/\*\*Skill \d+: (.*?)\*\*[\s\S]*?(?=\*\*Skill \d+:|$)/g);
      const skills = [];
      
      if (skillMatches && skillMatches.length > 0) {
        for (let j = 0; j < Math.min(skillMatches.length, 2); j++) {
          const skillText = skillMatches[j];
          const skillNameMatch = skillText.match(/\*\*Skill \d+: (.*?)\*\*/);
          const skillName = skillNameMatch ? skillNameMatch[1] : "Skill";
          
          // Extract up to 2 resources per skill to avoid timeout
          const resourceMatches = skillText.match(/\*\*([^*:]+?):\*\* \[(.*?)\]\((https?:\/\/[^\s)]+)\)/g);
          const resources = [];
          
          if (resourceMatches && resourceMatches.length > 0) {
            for (let k = 0; k < Math.min(resourceMatches.length, 2); k++) {
              const resourceText = resourceMatches[k];
              const resourceMatch = resourceText.match(/\*\*([^*:]+?):\*\* \[(.*?)\]\((https?:\/\/[^\s)]+)\)/);
              if (resourceMatch) {
                resources.push({
                  title: resourceMatch[2],
                  url: resourceMatch[3]
                });
              }
            }
          } else {
            // Add a default resource if none found
            resources.push({
              title: "MDN Web Docs",
              url: "https://developer.mozilla.org/en-US/docs/Web"
            });
          }
          
          skills.push({
            name: skillName,
            resources: resources
          });
        }
      } else {
        // Add a default skill if none found
        skills.push({
          name: "Core Skills",
          resources: [
            {
              title: "MDN Web Docs",
              url: "https://developer.mozilla.org/en-US/docs/Web"
            }
          ]
        });
      }
      
      levels.push({
        id: levelId,
        title: levelTitle,
        skills: skills
      });
    }
    
    return {
      title: "Web Development Learning Roadmap",
      description: text.substring(0, 150).replace(/\n/g, ' ') + "...",
      levels: levels
    };
  } catch (error) {
    console.error("Error in extractRoadmapFromText:", error);
    return defaultRoadmap;
  }
}