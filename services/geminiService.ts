
import { GoogleGenAI, Chat } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

let chatInstance: Chat | null = null;

const getChatInstance = (): Chat => {
  if (!chatInstance) {
    chatInstance = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: 'You are a helpful and friendly study buddy for a software development student. Explain concepts clearly, provide concise code examples, and maintain a positive and encouraging tone. Keep your answers focused on the user\'s question.',
      },
    });
  }
  return chatInstance;
};

export const streamStudyBuddyResponse = async (prompt: string) => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is not configured.");
  }
  
  const chat = getChatInstance();
  try {
    const responseStream = await chat.sendMessageStream({ message: prompt });
    return responseStream;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // In case of an error that invalidates the chat, reset it.
    chatInstance = null; 
    throw error;
  }
};
