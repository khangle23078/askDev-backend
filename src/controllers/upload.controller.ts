import { Request, Response } from "express";
import { CREATED, INTERNAL_SERVER_ERROR, OK } from "http-status";
import { Image } from "../entities/image.entity";
import { v2 as cloudinary } from 'cloudinary'

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const image = req.file
    const newImage = Image.create({ url: image?.path, public_id: image?.filename })
    await newImage.save()
    return res.status(CREATED).json({
      message: 'Upload ảnh thành công',
      image: newImage
    })
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      status: INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}

export const deleteFile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { public_id } = req.body
    await Image.delete(id)
    await cloudinary.uploader.destroy(public_id);

    return res.status(OK).json({
      message: 'Xóa ảnh thành công',
    })
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      status: INTERNAL_SERVER_ERROR,
      message: error
    })
  }
}