import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
const app=express();
dotenv.config({path: './config/config.env'});

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     methods:["POST", "GET", "OPTIONS"],
//     credentials: true, 
// }))

const handlePreflight = (req, res, next) => {
    // Set CORS headers to allow the requested methods and headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.setHeader('Access-Control-Max-Age', '86400'); // Cache preflight requests for 24 hours
  
    // Respond to the preflight request with a 204 No Content status
    res.status(204).end();
  };
  
  // Use the handlePreflight middleware for OPTIONS requests
app.options('*', handlePreflight);

console.log(process.env.FRONTEND_URL);
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation",reservationRouter);
dbConnection();

app.use(errorMiddleware)

export default app;