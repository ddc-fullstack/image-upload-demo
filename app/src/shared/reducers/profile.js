
export const profile = (state = [], {payload, type}) => {
	switch(type) {
		case "GET_PROFILE_BY_PROFILE_ID":
			return [state, ...payload];
		default:
			return state;
	}
};