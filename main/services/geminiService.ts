import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, PROJECTS } from '../constants';

const apiKey = process.env.API_KEY || '';

// System instruction to give the AI context about the persona
const SYSTEM_INSTRUCTION = `
You are the professional AI persona of ${PERSONAL_INFO.name}, currently working as ${PERSONAL_INFO.title} at ${PERSONAL_INFO.company}.
Your goal is to answer questions about ${PERSONAL_INFO.name} professional background, skills, and projects based on the following data.
Keep answers concise, professional, and knowledgeable.
Reflect a passion for manufacturing, data science, and stochastic optimization.

Background Data:
- About: ${PERSONAL_INFO.about}
- Education: ${JSON.stringify(EDUCATION)}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Projects: ${JSON.stringify(PROJECTS)}
- Key Skills: Stochastic Optimization, Quantitative Risk Analysis, Digital Transformation.

If a user asks about something not in this data, politely state that you can only answer questions regarding professional background or suggest contacting Alex directly.
Do not hallucinate personal private details not listed here.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient && apiKey) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "I'm sorry, my AI brain isn't connected right now (Missing API Key).";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // We construct a chat-like history for the generateContent call if needed, 
    // or use the chat API. Using the Chat API is cleaner for conversation.
    const chat = client.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history // Pass previous history
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary error while processing your request.";
  }
};
