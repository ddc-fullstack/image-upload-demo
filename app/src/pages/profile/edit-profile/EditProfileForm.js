import React from "react"
import * as Yup from "yup";
import {httpConfig} from "../../../shared/utils/http-config";
import {Formik} from "formik";
import {EditProfileFormContent} from "./EditProfileFormContent";

export const EditProfileForm = ({profile}) => {

	const initialValues = {
		profileEmail: "",
		profileAtHandle: "",
		profilePhone: "",
		profileAvatarUrl: null
	};

	const validationObject = Yup.object().shape({
		profileEmail: Yup.string()
			.email("email must be a valid email"),
		profilePhone: Yup.string()
			.min(10, "phone number is to short")
			.max(20, "phone Number is to long"),
		profileAvatarUrl: Yup.mixed(),
		profileAtHandle: Yup.string
	});


	async function submitEditedProfile(values, {resetForm, setStatus}) {

		const updateProfileObject = (cloudinaryUrl, profile, values) => {
			const newProfile = Object.assign({}, {...values}, {...profile});
			if(cloudinaryUrl) {
				newProfile.profileAvatarUrl = cloudinaryUrl;
			}
			return newProfile;
		};

		try {
			if(values.profileAvatarUrl) {
				const imageResponse = await httpConfig.post("/apis/image-upload/", values.profileAvatarUrl);

				if(imageResponse.status === 200) {
					const updatedProfile = updateProfileObject(imageResponse.message, profile, values);
					const profileResponse = await httpConfig.put(`apis/profile/${updatedProfile.profileId}`, updatedProfile);
					resetForm();
					setStatus(profileResponse);
				} else {
					setStatus({message: imageResponse.message, type: imageResponse.type});
				}
			} else {
				const updatedProfile = updateProfileObject(undefined, profile, values);
				const profileResponse = await httpConfig.put(`apis/profile/${updatedProfile.profileId}`, updatedProfile);
				resetForm();
				setStatus(profileResponse);
			}

		} catch(error) {
			console.log(error)
		}
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={submitEditedProfile}
			validationSchema={validationObject}
		>
			{EditProfileFormContent}
		</Formik>
	)


};