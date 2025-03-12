import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ✅ Serve all static files from 'public'
app.use(express.static(path.join(__dirname, "public")));

// ✅ Serve index.html from the root (not src/)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ Serve project pages inside 'public/pages/'
app.get("/pages/:page", (req, res) => {
    res.sendFile(path.join(__dirname, "public/pages", `${req.params.page}.html`));
});

// Start Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
