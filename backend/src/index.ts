import express from "express";
import { legalDocuments } from "./data/legalDocs.js";

const app = express();
const PORT = 2000;

app.get("/api/documents", (req, res) => {
  res.send(legalDocuments);
});

app.use((err: Error, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ error: "something went wrong" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
