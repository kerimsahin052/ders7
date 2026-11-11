import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    student: "2416501039",
    time: new Date().toISOString()
  });
});

export default app;