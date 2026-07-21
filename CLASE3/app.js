import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Settings
const app = express();
app.set("PORT", process.env.PORT);

// Middlewares

// Routes

// Run server
app.listen(app.get("PORT"), () =>
  console.log(`Server runnig on port ${app.get("PORT")} `),
);
