import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioInfo } from "./info.js";

// IMPORTANT: You must create a .env file in the root of your project
// and add your Gemini API key like this:
// VITE_GEMINI_API_KEY="YOUR_API_KEY"

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  // Return a mock function if the API key is not set.
  // This prevents the app from crashing.
  console.warn("Gemini API key not found. Chatbot will be in offline mode.");
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;
const model = genAI ? genAI.getGenerativeModel({ model: "gemini-pro" }) : null;

export const runChat = async (history, newQuestion) => {
  if (!model) {
    return "I'm currently offline. Please configure the API key to chat with me.";
  }

  // Construct a detailed prompt including the persona, history, and new question.
  const fullPrompt = `
    ${portfolioInfo}

    Here is the current conversation history:
    ${history.map((msg) => `${msg.sender}: ${msg.text}`).join("\n")}

    Now, answer this new question from the user:
    user: ${newQuestion}
  `;

  try {
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I have no money to subscribe to Pro. Thank you for trying!";
  }
};