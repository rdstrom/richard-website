import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

export const getGeminiChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing. AI features will not work.");
    // Return a dummy object or handle error gracefully in a real app
    // For this demo, we assume the key is present as per instructions.
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });

  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const session = getGeminiChatSession();
  
  try {
    const responseStream = await session.sendMessageStream({ message });
    
    // Create an async generator to yield chunks of text
    return (async function* () {
      for await (const chunk of responseStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    })();
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};