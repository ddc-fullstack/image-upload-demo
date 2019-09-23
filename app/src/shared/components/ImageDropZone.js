import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export function ImageDropZone({formikProps}) {

	const onDrop = useCallback(acceptedFiles => {

		const formData = new FormData();
		formData.append('image',acceptedFiles[0]);


		formikProps.setFieldValue("profileAvatar", formData )

	}, []);
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


	return (
		<div className="form-group" {...getRootProps()}>
			<div className="input-group input-group-lg">
			<input
				className="form-control-file"
				accept="image/*"
				{...getInputProps()}

			/>
			{
				isDragActive ?
					<p>Drop the files here ...</p> :
					<p>Drag 'n' drop some files here, or click to select files</p>
			}
			</div>
		</div>
	)
}