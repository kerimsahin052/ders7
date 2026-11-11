import express from "express";
import cors from "cors";
import eventRoutes from "./routes/event-routes.js";

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

app.use("/events", eventRoutes);

export default app;