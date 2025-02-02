let Apikey = "AIzaSyC4fi_yB9dfolH3H4QtVDqbv1pPxlmL4xk"

import { GoogleGenerativeAI } from "@google/generative-ai";

// Set API Key
const genAI = new GoogleGenerativeAI(Apikey);

async function getResponse(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text()
}

// Example usage
export default getResponse;
