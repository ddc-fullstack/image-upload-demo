import {combineReducers} from "redux"
import {ProfileReducer} from "./tweetReducer";

export const combinedReducers = combineReducers({
	Profiles: profileReducer,
});