const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function getResponseChatGemini(req, res) {
  const { prompt } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return res.json({ response: text });
  } catch (error) {
    console.error('Error en la comunicacion con la api', error);
    res.status(500).send(error);
  }
}
module.exports = { getResponseChatGemini };
