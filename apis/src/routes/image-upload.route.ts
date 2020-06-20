import { Router } from 'express';
import {imageUploadController} from "../controllers/image-upload.controller";
import {imageUploader} from "../lib/multer";

export const ImageUploadRouter = Router();

ImageUploadRouter.route('/')
	.post(imageUploader, imageUploadController);