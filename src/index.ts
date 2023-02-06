
import dotenv from "dotenv"
import ping from "./endpoints/ping"
import createPost from "./endpoints/createpost"
import  friendsip from "./endpoints/friendship"
import registrar from "./endpoints/registrar_usu"
import app from "./endpoints/createpost"
import post_id from "./endpoints/post_id"
import undfriendship from "./endpoints/undfriedship"
import feed from "./endpoints/feed"

/* /**************************** CONFIG ******************************/

dotenv.config()

/**************************** TYPES ******************************/
 



app.get("/ping",ping );
app.post("/Users", registrar)
app.post("/post", createPost)
app.get("/posts/:id", post_id)
app.get("/friendship", friendsip)
app.delete("/undfriendship", undfriendship)
app.get("/feed/:userId", feed)
 
/**************************** SERVER INIT ******************************/

