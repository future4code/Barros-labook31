import express, { Express, Request, Response } from "express";
import connection from "../database/connection";
import app from "../database/app";


app.post("/fazerAmizade:id", async (req: Request, res:Response) =>{

    try{

    

        const {id} = req.body;

        const  fazerAmizade = await connection("labook_makefriendship")
        .select("*")
        .where("id", id)
        .first

        if(!fazerAmizade){
            res.status(200).send({message: "fracassado"})
            return
        } 


        res.status(200).send("Amizade Feita")
       
    }catch(error:any){
        let message = error.message;
        res.status(400).send({ message })
         
    }

})

export default app