import { Router } from 'express';
import { signInValidator } from '../validators/sign-in.validator';
import {signInController} from "../controllers/sign-in.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
const { checkSchema } = require('express-validator');

export const SignInRouter = Router();

SignInRouter.route('/')
	.post(asyncValidatorController(checkSchema(signInValidator)), signInController);