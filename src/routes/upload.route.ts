import { Router } from "express";
import { deleteFile, uploadFile } from "../controllers/upload.controller";
import { upload } from "../configs/cloudinary.config";

export const route = Router()

route.post("/upload", upload.single('image'), uploadFile)
route.post("/delete/:id", deleteFile)

export default route;