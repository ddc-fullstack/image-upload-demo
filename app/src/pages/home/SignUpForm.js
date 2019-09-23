import React from 'react';

import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpFormContent} from "./SignUpFormContent";
import {httpConfig} from "../../shared/utils/http-config";

export const SignUpForm = () => {
	const signUp = {
		profileEmail: "",
		profileAtHandle: "",
		profilePassword: "",
		profilePasswordConfirm: "",
		profilePhone: "",
		profileAvatar:null
	};

	const validator = Yup.object().shape({
		profileEmail: Yup.string()
			.email("email must be a valid email")
			.required('email is required'),
		profileAtHandle: Yup.string()
			.required("profile handle is required"),
		profilePassword: Yup.string()
			.required("Password is required")
			.min(8, "Password must be at least eight characters"),
		profilePasswordConfirm: Yup.string()
			.required("Password Confirm is required")
			.min(8, "Password must be at least eight characters"),
		profilePhone: Yup.string()
			.min(10, "phone number is to short")
			.max(10, "phone Number is to long"),
		profileAvatar: Yup.mixed()
			.required("A profile Avatar is required")
	});

	const submitSignUp = (values, {resetForm, setStatus}) => {
		console.log(values);
		httpConfig.post("/apis/sign-up/", values)
			.then(reply => {
					let {message, type} = reply;

					if(reply.status === 200) {
						resetForm();
						setStatus({message, type});
					}
					setStatus({message, type});
				}
			);
	};

	return (

		<Formik
			initialValues={signUp}
			onSubmit={submitSignUp}
			validationSchema={validator}
		>
			{SignUpFormContent}
		</Formik>

	)
};