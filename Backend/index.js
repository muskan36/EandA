import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {dbConnection}from "./database/dbConnection.js"
import messageRouter from "./router/messageRouter.js";


dotenv.config({path: "./.env"});
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*app.use(
    cors({
        origin:[process.env.FRONTEND_URL],
        methods:["POST"],
        credentials:true,
    })
);*/

app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;
