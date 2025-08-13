import express from "express";
import dotenv from "dotenv";

//routes
import authRoutes from "./routes/auth.route.js";

//library imports
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use("/api/auth", authRoutes);

//server instantiate
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);

  connectDB();
});
