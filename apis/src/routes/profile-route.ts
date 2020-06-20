import {postProfileController} from "../controllers/profile.controller";
import {Router} from "express";

export const ProfileRoute = Router();
ProfileRoute.route('/')
	.post(postProfileController);