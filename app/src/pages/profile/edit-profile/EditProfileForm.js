import React, { useCallback } from "react"
import * as Yup from "yup";
import { httpConfig } from "../../../shared/utils/http-config";
import { Formik } from "formik";
import { useDropzone } from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormDebugger } from '../../../shared/components/FormDebugger'
import { EditProfileFormContent } from './EditProfileFormContent'

export const EditProfileForm = ({profile}) => {

  const initialValues = {
    profileEmail: "",
    profileAtHandle: "",
    profilePassword: "",
    profilePasswordConfirm: "",
    profilePhone: "",
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

  function submitEditedProfile (values, {resetForm, setStatus}) {
    const submitUpdatedProfile = (updatedProfile) => {
      console.log(values)
      httpConfig.put(`apis/profile/${updatedProfile.profileId}`, updatedProfile)
        .then(reply => {
          let {message, type} = reply;

          if (reply.status === 200) {
            resetForm();
          }
          setStatus({message, type});
          return (reply)
        })
    };

    if (values.profileAvatarUrl !== "null") {
      httpConfig.post("/apis/image-upload/", values.profileAvatarUrl)
        .then(reply => {
            let {message, type} = reply;

            if (reply.status === 200) {
              submitUpdatedProfile(values)
            } else {
              setStatus({message, type});
            }
          }
        );
    } else {
      submitUpdatedProfile(values);
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