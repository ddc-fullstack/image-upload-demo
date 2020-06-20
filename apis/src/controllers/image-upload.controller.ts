import {NextFunction, Request, Response} from "express";
import {imageUploader} from "../lib/multer";
import multer, {MulterError} from "multer";

export async function imageUploadController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		return response.json({status: 200, data: null, message: "this thing is on"})
	} catch (error) {
	console.log("error?",error.message)
	}
}



