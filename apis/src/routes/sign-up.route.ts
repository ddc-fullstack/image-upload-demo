import { Router } from 'express';
import { signupProfileController } from '../controllers/sign-up.controller';
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {signupValidator} from "../validators/sign-up.validator";
import {activationController} from "../controllers/activation.controller";


const { checkSchema } = require('express-validator');

export const SignupRouter = Router();

SignupRouter.route('/')
	.post(asyncValidatorController(checkSchema(signupValidator)), signupProfileController);

SignupRouter.route('/activation/:activation').get(activationController)

