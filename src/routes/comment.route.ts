import { Router } from "express";
import { createComment, getComments } from "../controllers/comment.controller";

export const route = Router()

route.get("/:postId", getComments)
route.post("/:postId/:userId", createComment)

export default route;