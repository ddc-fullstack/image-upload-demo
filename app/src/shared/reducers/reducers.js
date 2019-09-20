import {combineReducers} from "redux"
import {profileReducer} from "./profileReducer";



export const combinedReducers = combineReducers({
	Profiles: profileReducer
});