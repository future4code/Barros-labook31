import express, { Express, Request, Response } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import Knex from "knex"
import connection from "./database/connection"
import ping from "./endpoints/ping"
import registrar from "./endpoints/registrar_usu"
import createPost from "./endpoints/createpost"

/* /**************************** CONFIG ******************************/

dotenv.config()


const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** TYPES ******************************/
 
type authenticationData = {
   id: string
}

type user = {
   id: string,
   name: string,
   email: string,
   password: string
}

enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

type post = {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
}


/**************************** ENDPOINTS ******************************/

/* app.post('/users', async (req: Request, res: Response) => {
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
}) */

/* app.post('/post', async (req: Request, res: Response) => {
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
 */
app.get('/posts/:id', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { id } = req.params

      const queryResult: any = await connection("labook_posts")
         .select("*")
         .where({ id })

      if (!queryResult[0]) {
         res.statusCode = 404
         message = "Post not found"
         throw new Error(message)
      }

      const post: post = {
         id: queryResult[0].id,
         photo: queryResult[0].photo,
         description: queryResult[0].description,
         type: queryResult[0].type,
         createdAt: queryResult[0].created_at,
         authorId: queryResult[0].author_id,
      }

      res.status(200).send({ message, post })

   } catch (error:any) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400
      res.send({ message })
   }
})


app.get("/ping",ping );
app.post("/Users", registrar)
app.post("/post", createPost)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Conectado a porta 3003")
})