import {NextFunction, Request, Response} from "express";
import {uploadToCloudinary} from "../lib/cloudinary";

export async function imageUploadController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const message : any = await uploadToCloudinary(request)
		return response.json({status: 200, data: null, message: message})
	} catch (error) {
	 return response.json({status:400, message: error.message, data: null})
	}
}



