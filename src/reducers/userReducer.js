import * as actionTypes from "../actions/actionTypes.js";

const initialState = { authData: null };

const userReducer = (user = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH:
			localStorage.setItem("user", JSON.stringify(action?.data));
			return { ...user, authData: action?.data };
		case actionTypes.LOGOUT:
			localStorage.clear();
			return { ...user, authData: null };
		default:
			return user;
	}
};

export default userReducer;
