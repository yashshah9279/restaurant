import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
const app=express();
dotenv.config({path: './config/config.env'});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST","GET"],
    credentials: true, 
}))
console.log(process.env.FRONTEND_URL);
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://yhsrestaurant.netlify.app/');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation",reservationRouter);
dbConnection();

app.use(errorMiddleware)

export default app;