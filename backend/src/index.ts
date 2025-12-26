import express from "express";

const app = express();
const PORT = 2000;

app.get("/api/documents", (req, res) => {
  res.send("Hello! This is my server.");
});

app.post("/api/documents/analyze", (req, res) => {
  res.json({
    message: "data received",
    data: req.body,
  });
});

app.get("/api/system/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.use((err: Error, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ error: "something went wrong" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
