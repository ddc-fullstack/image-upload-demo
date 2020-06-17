import {NextFunction, Request, Response} from "express";

export async function imageUploadController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		//request.file
		return response.json({status: 200, data: null, message: "this thing is on"})
	} catch (error) {
		console.log(error)
	}
}