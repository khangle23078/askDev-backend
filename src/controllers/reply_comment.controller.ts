import { Request, Response } from "express";
import { CREATED, INTERNAL_SERVER_ERROR } from "http-status";
import { insert } from "../services/reply_comment.service";

export const createReplyComment = async (req: Request, res: Response) => {
  try {
    const { commentParentId, postId, userId } = req.params;
    const replyComment = await insert(
      parseInt(commentParentId),
      parseInt(postId),
      parseInt(userId), req.body
    )
    
    return res.status(CREATED).json({
      status: CREATED,
      message: 'Tạo reply-comment thành công',
      data: replyComment
    })
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      status: INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}