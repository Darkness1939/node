import express from "express";
import { authMiddleware } from "./auth.middleware.js";
import { homeRouter } from "./regpost.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

async function main(){
    app.use(authMiddleware)
    app.use(express.json())
    app.use('/api' , homeRouter)
    app.all('*', (req, res) => {
        res.status(404).json({message: 'Not found'})
    });

    app.listen(process.env.PORT || 4200, ()=>{
        console.log(`Сервер запущен на ${process.env.PORT} порту`)
    })
};
main();