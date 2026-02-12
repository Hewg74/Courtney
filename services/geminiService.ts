import { GoogleGenAI } from "@google/genai";

// We use the Gemini API to power a "Calm Script Generator" in the resources section.
// This provides unique value to parents visiting the site.

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables. The Calm Generator will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateCalmScript = async (situation: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "I'm sorry, I can't generate a script right now. Please try again later.";

  const prompt = `
    You are Courtney Alex, a compassionate pediatric wellness coach.
    A parent has come to you because their child is struggling with: "${situation}".
    
    Please write a gentle, 3-step "Co-regulation Script" for the parent to say to their child.
    
    Guidelines:
    1. Tone: Warm, grounding, validating, slow, safe. NOT clinical, NOT preachy.
    2. Format: Return ONLY the script in Markdown format. Use bolding for emphasis on key soothing words.
    3. Structure: 
       - Step 1: Validate/Connect
       - Step 2: Name the Feeling/Sensory Grounding
       - Step 3: Invitation to Calm
    4. Keep it brief (under 100 words total).
    5. Do not include introductory filler like "Here is a script". Just give the script.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    
    return response.text || "I couldn't create a script for that specific situation, but taking a deep breath together is always a good start.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my wellness library right now. Please try again in a moment.";
  }
};
