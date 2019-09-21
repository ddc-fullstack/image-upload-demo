import React from "react";

import {LinkContainer} from "react-router-bootstrap"
import {SignInModal} from "./main-nav/sign-in/SignInModal";


export const MainNav = () => (
	<>
		<nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
					  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"/>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item">
						<LinkContainer exact to="/"><a className="nav-link" href="">Home</a></LinkContainer>
					</li>
					<li className="nav-item">
						<LinkContainer to="profile"><a className="nav-link" href="">Profile</a></LinkContainer>
					</li>
					<li className="nav-item">
						<SignInModal/>
					</li>
				</ul>
			</div>
		</nav>
	</>
);
