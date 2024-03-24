import { getPost, getPosts } from "./../controllers/post.controller";
import { Router } from "express";

const route = Router()

route.get("/", getPosts)
route.get("/:id", getPost)

export default route;