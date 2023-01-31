import express, { Express, Request, Response } from "express"
import connection from "../database/connection"
import app from "../database/app"


app.post('/users', async (req: Request, res: Response) => {
    try {
       let message = "Success!"
       const { name, email, password } = req.body
 
       if (!name || !email || !password) {
          res.statusCode = 406
          message = '"name", "email" and "password" must be provided'
          throw new Error(message)
       }
 
       const id: string = Date.now().toString()
 
       await connection('labook_users')
          .insert({
             id,
             name,
             email,
             password
          })
 
       res.status(201).send({ message })
 
    } catch (error:any) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
       res.send({ message })
    }
 })

 export default app