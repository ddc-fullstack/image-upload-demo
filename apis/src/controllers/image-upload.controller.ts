import {NextFunction, Request, Response} from "express";
const DatauriParser = require('datauri/parser');
import path from "path";
const cloudinary = require('cloudinary').v2
let streamifier = require('streamifier');


export async function imageUploadController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		
		cloudinary.config({
			api_key: process.env.CLOUDINARY_KEY,
			api_secret: process.env.CLOUDINARY_SECRET,
			cloud_name: "cnm-ingenuity-deep-dive-bootcamp"
		})
		let uploadFromBuffer = (req: Request) => {
			
			return new Promise((resolve, reject) => {
				
				let cld_upload_stream = cloudinary.uploader.upload_stream(
					(error: any, result: any) => {
						
						if (result) {
							resolve(result);
						} else {
							reject(error);
						}
					}
				);
				
				streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
			});
			
		};
		
		const result = await uploadFromBuffer(request)
		console.log(result)
		
		return response.json({status: 200, data: null, message: "this thing is on"})
	} catch (error) {
	console.log("error?",error.message)
	}
}



