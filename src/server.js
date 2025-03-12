import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files
app.use(express.static("public"));

// Route to serve section files
app.get("/sections/:section", (req, res) => {
    const section = req.params.section;
    res.sendFile(path.join(__dirname, "../public/sections", `${section}.html`));
});

// Start Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
