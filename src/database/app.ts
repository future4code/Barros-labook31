import express, { Express, Request, Response } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import Knex from "knex"





dotenv.config()


 const app: Express = express()
app.use(express.json())
app.use(cors()) 

 app.listen(3003, () => {
    console.log("Conectado a porta 3003")
 }) 
 

export default app

