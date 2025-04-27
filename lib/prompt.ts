// const prompt = `
//   I need a detailed learning roadmap for ${topic} in JSON format.
  
//   USER DETAILS:
//   - Experience level: ${experience}
//   - Goals: ${goals}
//   - Timeframe: ${timeframe}
  
//   RESPONSE INSTRUCTIONS:
//   - Your entire response must be valid JSON only
//   - No explanatory text before or after the JSON
//   - Do not use markdown formatting
//   - Ensure all URLs are valid
  
//   JSON STRUCTURE:
//   {
//     "title": "Learning Roadmap for ${topic}",
//     "description": "A detailed roadmap tailored for ${experience} level learners aiming to ${goals} within ${timeframe}",
//     "levels": [
//       {
//         "id": "beginner",
//         "title": "Beginner Level",
//         "skills": [
//           {
//             "name": "Skill Name",
//             "resources": [
//               {
//                 "title": "Resource Title",
//                 "url": "https://example.com"
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
  
//   REQUIREMENTS:
//   - Include exactly 3 levels: beginner, intermediate, and advanced
//   - Each level should have 3-5 skills
//   - Each skill should have 2-3 resources with valid URLs
//   - Every URL must be real and accessible
//   - All JSON must be properly formatted with no trailing commas
// `;