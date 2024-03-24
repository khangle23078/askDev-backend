import { getPosts } from "./../controllers/post.controller";
import { Router } from "express";

const route = Router()

route.get("/", getPosts)

export default route;