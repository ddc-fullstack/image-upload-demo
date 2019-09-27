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


	const addCloudinaryUrl = (cloudinaryUrl, profile, values ) => {
		const newProfile = Object.assign({}, {...values}, {...profile});
		newProfile.profileAvatarUrl = cloudinaryUrl;
		return newProfile;
	};

	const  uploadImage =  async (image) =>{
		const {status,message, type} = await httpConfig.post("/apis/image-upload/",image);
		console.log(status);
		return status === 200 ?  {status, message,type} : undefined;
	};

	const uploadEditedProfile = async (profile) => {
		const {status,message, type} = await httpConfig.put(`apis/profile/${profile.profileId}`, profile);
		return status === 200 ?  {status, message,type} : undefined;
	};



	async function submitEditedProfile(values, {resetForm, setStatus}) {

		try {
			if(values.profileAvatarUrl) {
				const imageResponse =   await uploadImage(values.profileAvatarUrl);

				console.log(imageResponse);

				const updatedProfile = imageResponse.status === 200 ?
					addCloudinaryUrl(imageResponse.message, profile, values) :
					setStatus({message: imageResponse.message, type: imageResponse.type});


				console.log(updatedProfile);

				const profileResponse = updatedProfile ? await uploadEditedProfile(updatedProfile) :
					setStatus({message :imageResponse.message, type: imageResponse.type});
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