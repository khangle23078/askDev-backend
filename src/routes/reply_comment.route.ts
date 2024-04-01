import { Router } from "express";
import { createReplyComment } from "../controllers/reply_comment.controller";

const route = Router()

route.post("/:commentParentId/:postId/:userId", createReplyComment)

export default route;