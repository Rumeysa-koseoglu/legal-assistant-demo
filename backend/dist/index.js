import express from "express";
const app = express();
const PORT = 2000;
app.get("/", (req, res) => {
    res.send("Hello! This is my first TypeScript server.");
});
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map