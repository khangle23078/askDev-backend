import { createPost, getPost, getPosts } from "./../controllers/post.controller";
import { Router } from "express";

const route = Router()

route.get("/", getPosts)
route.get("/:id", getPost)
route.post("/:userId", createPost)

export default route;