import multer, {memoryStorage, StorageEngine} from "multer";
import {Express, Request} from "express";
const storage : StorageEngine = memoryStorage()
const limits  = {fields: 2, files: 1, parts: 2 }
const fileFilter  = ( request: Request, file : Express.Multer.File , callback : any) => {
	const {originalname} = file
	return originalname.match(/\.(jpg|jpeg|png|gif)$/)
		? callback(null, true)
		: callback(new Error("only images can be uploaded "), false)
}

export const imageUploader  = multer({storage, limits, fileFilter}).single('image')






