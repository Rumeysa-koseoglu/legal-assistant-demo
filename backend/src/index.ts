import express from "express";
import { legalDocuments } from "./data/legalDocs.js";
import cors from "cors";

const app = express();
const PORT = 2000;

app.use(cors());

app.get("/api/documents", (req, res) => {
  const keyword = String(req.query.q || "").toLowerCase();

  app.post("/api/summarize", async (req, res) => {
    const { content } = req.body;
    res.json({ summary: "this is a temporary mock summary." });
  });

  const result = legalDocuments.filter(
    (doc) =>
      doc.title.toLowerCase().includes(keyword) ||
      doc.content.toLowerCase().includes(keyword)
  );
  res.json(result);
});

app.use((err: Error, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ error: "something went wrong" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
