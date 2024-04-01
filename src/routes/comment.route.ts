import { Router } from "express";
import { createComment } from "../controllers/comment.controller";

export const route = Router()

route.post("/:postId/:userId", createComment)

export default route;