
export function autenticar (){

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
 
  type postId= {
    id:string
 }






}


 

 export default autenticar