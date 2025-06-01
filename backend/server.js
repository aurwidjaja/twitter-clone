import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRoutes); //This creates a middle layer
//Essentially communicates that any request starting with /api/auth is routed to the 
//authRoutes file
//This server intercepts HTTP requests from the frontend and then talks to the backend

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectMongoDB();
});