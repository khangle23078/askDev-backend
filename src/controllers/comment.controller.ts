import { Request, Response } from "express";
import { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from "http-status";
import { User } from "../entities/user.entity";
import { getById } from "../services/post.service";
import { getAll, insert } from "../services/comment.service";

export const getComments = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const comments = await getAll(parseInt(postId))
    return res.status(OK).json({
      status: OK,
      data: comments
    })
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      staus: INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}

export const createComment = async (req: Request, res: Response) => {
  try {
    const { postId, userId } = req.params
    const post = await getById(parseInt(postId))
    const user = await User.findOneBy({ id: parseInt(userId) })

    if (!post) {
      return res.status(NOT_FOUND).json({
        status: NOT_FOUND,
        message: 'Bài viết không tồn tại'
      })
    }

    if (!user) {
      return res.status(NOT_FOUND).json({
        status: NOT_FOUND,
        message: 'Tài khoản không tồn tại'
      })
    }
    const comment = await insert(req.body, parseInt(userId), parseInt(postId))
    return res.status(CREATED).json({
      status: CREATED,
      message: 'Tạo bình luận thành công',
      data: comment
    })
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      status: INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}