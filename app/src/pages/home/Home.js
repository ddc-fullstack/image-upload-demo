import React from "react"
import Container from "react-bootstrap/Container";
import {SignUpForm} from "./SignUpForm";
import { EditProfileForm } from '../profile/edit-profile/EditProfileForm'

export const Home = () => {
	return (
		<>
			<Container>
				<br/>
				<EditProfileForm />
			</Container>
		</>
	)
};