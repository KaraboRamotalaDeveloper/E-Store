import express from "express";
import dotenv from "dotenv";

//import files from the project
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use("/api/auth", authRoutes);

//server instantiate
app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:" + PORT);
})