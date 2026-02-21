import OpenAI from 'openai';

// Ensure you have OPENAI_API_KEY set in your .env.local with your Gemini API Key
export const aiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
});
