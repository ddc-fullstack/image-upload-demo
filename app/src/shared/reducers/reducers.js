import {combineReducers} from "redux"
import {profileReducer} from "./profileReducer";



export const reducers = combineReducers({
	profiles: profileReducer
});