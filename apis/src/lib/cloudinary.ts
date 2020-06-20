import { Request } from 'express'

const cloudinary = require('cloudinary').v2
let streamifier = require('streamifier');

cloudinary.config({
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  cloud_name: "cnm-ingenuity-deep-dive-bootcamp"
})

export const uploadToCloudinary = (request : Request) : Promise<string>  => {
  
  return new Promise((resolve, reject) => {

    let cld_upload_stream = cloudinary.uploader.upload_stream(
      (error: any, cloudinaryResult: any) => {
        if (cloudinaryResult) {
          resolve(cloudinaryResult.secure_url);
        } else {
          reject(error);
        }
      }
    );
    streamifier.createReadStream(request.file.buffer).pipe(cld_upload_stream);
  });

};