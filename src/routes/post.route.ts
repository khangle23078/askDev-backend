import { createPost, deletePost, getPost, getPosts, udpatePost } from "./../controllers/post.controller";
import { Router } from "express";

const route = Router()

route.get("/", getPosts)
route.get("/:id", getPost)
route.post("/:userId", createPost)
route.put("/:id", udpatePost)
route.delete("/:id", deletePost)

export default route;