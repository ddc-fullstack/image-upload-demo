import React from "react"
import {getProfileByProfileId} from "../../shared/actions/profile.action";
import {UseJwtProfileId} from "../../shared/hooks/jwtHooks"
import {useDispatch, useSelector} from "react-redux";
import * as jwtDecode from "jwt-decode";
import {EditProfileForm} from "./edit-profile/EditProfileForm";


export const Profile = () => {

	const dispatch = useDispatch();

	const profileId = UseJwtProfileId();

	const effects = () => {

	};

	const inputs = [profileId];

	React.useEffect(effects, inputs);

	const profile = useSelector((state) => {
			let {profiles} = state;
			let matchedProfile = profiles.find(profile => profile.profileId === profileId);
			return matchedProfile !== undefined ? matchedProfile : null
		}
	);

	const showProfileAtHandle = () => {
		if(profile) {
			return (
				<>
					<h1>{profile.profileAtHandle}</h1>
					<EditProfileForm profile={profile}/>
				</>

			)
		}
		return (
			<>
				<h1>Please login</h1>
			</>
		)
	};


	return (
		<>
			{showProfileAtHandle()}
		</>
	)
};