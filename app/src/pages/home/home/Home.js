import React from "react"
import Container from "react-bootstrap/Container";
import { EditProfileForm } from './EditProfileForm'


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