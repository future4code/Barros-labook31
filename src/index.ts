
import dotenv from "dotenv"
import ping from "./endpoints/ping"
import createPost from "./endpoints/createpost"
import post_id from "./endpoints/post_id"
import makefriendship from "./endpoints/makefriendship"
import registrar from "./endpoints/registrar_usu"
import app from "./endpoints/createpost"


/* /**************************** CONFIG ******************************/

dotenv.config()

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

export type post = {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
}

export type postId= {
   id:string
}



app.get("/ping",ping );
app.post("/Users", registrar)
app.post("/post", createPost)
app.get("/posts/:id", post_id)
app.get("/fazerAmizade", makefriendship)
 
/**************************** SERVER INIT ******************************/

