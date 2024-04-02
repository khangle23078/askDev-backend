import { v2 as cloudinary } from 'cloudinary'
import 'dotenv/config'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "devshare"
  } as { folder: string }
})

export const upload = multer({ storage })