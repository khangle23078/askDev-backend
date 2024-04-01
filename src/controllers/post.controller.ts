import { Request, Response } from "express";
import { deleteById, getAll, getById, insert, updateById } from "./../services/post.service";
import httpStatus, { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from "http-status";
import { User } from "../entities/user.entity";

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
    res.status(CREATED).json({
      status: CREATED,
      message: 'Tạo bài viết thành công!',
      post: post
    })
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      status: INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}

export const udpatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const post = await getById(parseInt(id))

    if (!post) {
      return res.status(NOT_FOUND).json({
        status: NOT_FOUND,
        message: 'Không tìm thấy bài viết!'
      })
    }

    await updateById(parseInt(id), req.body)
    return res.status(OK).json({
      status: OK,
      message: 'Cập nhật bài viết thành công!'
    })
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      status: INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const post = await getById(parseInt(id))

    if (!post) {
      return res.status(NOT_FOUND).json({
        status: NOT_FOUND,
        message: 'Không tìm thấy bài viết'
      })
    }

    await deleteById(parseInt(id))
    return res.status(OK).json({
      status: OK,
      message: 'Xóa bài viết thành công!'
    })
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      status: INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}
