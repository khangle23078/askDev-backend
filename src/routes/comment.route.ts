import { Router } from "express";
import { createComment, deleteComment, getComments } from "../controllers/comment.controller";

export const route = Router()

route.get("/:postId", getComments)
route.post("/:postId/:userId", createComment)
route.delete("/:id", deleteComment)

export default route;