import { Request, Response } from "express";
import { getAll, getById, insert } from "./../services/post.service";
import httpStatus from "http-status";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getAll()
    return res.status(200).json({
      status: 200,
      data: posts
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const post = await getById(Number(id))
    return res.status(200).json({
      status: 200,
      data: post
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const post = await insert(parseInt(userId), req.body)
    res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: 'Tạo bài viết thành công!',
      post: post
    })
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}