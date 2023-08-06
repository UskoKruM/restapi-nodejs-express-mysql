import express from "express";
import morgan from "morgan";
// Routes
import languageRoutes from "./routes/language.routes.js";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", languageRoutes);

export default app;
