/**
 * Helper function that takes a Multer File and uses the buffer of the image to upload it to cloudinary.
 *
 * this function assumes that values for cloudinary_api_key, cloudinary_api_secret, and cloudinary_cloud_name have been set
 * in process.env.
 * multer.controller.ts must also be added to the route handling  image upload
 *
 */
import {Request} from 'express'
const cloudinary = require('cloudinary').v2
let streamifier = require('streamifier');

cloudinary.config({
	cloudinary_api_key: process.env.CLOUDINARY_KEY,
	cloudinary_api_secret: process.env.CLOUDINARY_SECRET,
	cloudinary_cloud_name: "cnm-ingenuity-deep-dive-bootcamp"
})

const {uploader: {upload_stream}} = cloudinary



export const uploadToCloudinary = (file: Express.Multer.File) : Promise<string> => {
	
	return new Promise((resolve, reject) => {
		
		const eager_options = {width: 200, crop: "scale"}
		
		const callbackHandler = (error: any, cloudinaryResult: any) => {
			return cloudinaryResult
				? resolve(cloudinaryResult.secure_url)
				: reject(error);
		}
		let cloudinaryUploadStream$ = upload_stream(eager_options, callbackHandler);
		streamifier.createReadStream(file.buffer).pipe(cloudinaryUploadStream$);
	});
	
};