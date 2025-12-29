import express from "express";
import { legalDocuments } from "./data/legalDocs.js";
import cors from "cors";
import "dotenv/config";

import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const PORT = 2000;
const apiKey = process.env.GEMINI_API_KEY || "";
app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(apiKey);

app.get("/api/documents", (req, res) => {
  const keyword = String(req.query.q || "").toLowerCase();

  const result = legalDocuments.filter(
    (doc) =>
      doc.title.toLowerCase().includes(keyword) ||
      doc.content.toLowerCase().includes(keyword)
  );
  res.json(result);
});

app.post("/api/summarize", async (req, res) => {
  const { content } = req.body;
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
  const prompt = `You are a professional legal assistant. Summarize the following legal document into 3 clear bullet points for a non-lawyer. Focus on obligations and risks

    Document: ${content}`;

  const result = await model.generateContent(prompt);
  const responseText = result.response.text();
  res.json({ summary: responseText });
});

app.use((err: Error, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ error: "something went wrong" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
