import {Response, Request, NextFunction} from "express";

export async  function postProfileController(request: Request, response: Response) {
	console.log(request.body)
	return response.json({status:200, data: null, message: "Congratulations on uploading a photo"})
}