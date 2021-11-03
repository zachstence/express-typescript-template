import express from "express";
import cors from "cors";

const app = express();
app.use(express.text());

const origin = process.env.NODE_ENV === "development" ? "http://localhost:8080" : ""
app.use(cors({origin}));

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

export default app;