import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import helmet from 'helmet';
import ConnectDB from './config/connectDb.js';


import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    credentials:true,
    origin: process.env.FRONTEND_URL
}));
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))

ConnectDB();
const PORT = 8080 || process.env.PORT
app.listen(PORT,()=>{
    console.log('server is running',PORT);
})
