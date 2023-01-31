import express, { Express, Request, Response } from "express"
import connection from "../database/connection"
import app from "../database/app"


app.post('/post', async (req: Request, res: Response) => {

/*    const id = req.body.id; 
   const photo = req.body.photo
   const description = req.body.description
   const type = req.body.type 
   const author_id = req.body.autor_id */

    try {
       let message = "Success!"
 
       const { photo, description, type, authorId } = req.body
 
       const postId: string = Date.now().toString()
 
       await connection("labook_posts")
          .insert({
             id:postId,
             photo,
             description,
             type,
             author_id: authorId
          })
 
       res.status(201).send({ message })
 
    } catch (error:any) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
       res.send({ message })
    }
 })
 
 export default app