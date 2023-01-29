import express from "express";
import morgan from "morgan";
// Routes EXAMPLE
import languageRoutes from "./routes/language.routes";
//Myrouter
import astroRoutes from "./routes/astro.routes";
import userRoutes from "./routes/user.routes";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes EXAMPLE
app.use("/api/languages", languageRoutes);

//Myroutes
app.use("/api/astros", astroRoutes);
app.use("/api/users", userRoutes);

export default app;
