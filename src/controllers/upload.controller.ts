import { Request, Response } from "express";
import { CREATED, INTERNAL_SERVER_ERROR } from "http-status";
import { Image } from "../entities/image.entity";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const image = req.file
    const newImage = Image.create({ url: image?.path, public_id: image?.filename })
    await newImage.save()
    return res.status(CREATED).json({
      message: 'Upload ảnh thành công',
      image: {
        url: image?.path,
        public_id: image?.filename
      }
    })
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      status: INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}