import { Request, Response } from "express";
import { getAll } from "./../services/post.service";

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