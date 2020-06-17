import { Router } from 'express';
import {imageUploadController} from "../controllers/image-upload.controller";

export const ImageUploadRouter = Router();

ImageUploadRouter.route('/')
	.put(imageUploadController);