import { Router } from "express";
import { uploadFile } from "../controllers/upload.controller";
import { upload } from "../configs/cloudinary.config";

export const route = Router()

route.post("/upload", upload.single('image'), uploadFile)

export default route;