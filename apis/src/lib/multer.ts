import multer, {StorageEngine} from "multer";
import {Express, Request} from "express";

const storage : StorageEngine = multer.memoryStorage()
const limits  = {fields: 2, files: 1, parts: 2 }
const fileFilter : any = ( request: Request, file : Express.Multer.File , callback : any) => {
	const {originalname} = file
	return originalname.match(/\.(jpg|jpeg|png|gif)$/)
		? callback(null, true)
		: callback(new Error("only images are allowed to be uploaded"), false)
}

export const imageUploader = multer({storage, limits, fileFilter}).single('image')




