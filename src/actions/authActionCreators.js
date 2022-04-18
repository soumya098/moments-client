import * as api from "../api";
import * as actionTypes from "./actionTypes";

export const signUp = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);
		const action = { type: actionTypes.AUTH, data: data };
		dispatch(action);
		navigate("/");
	} catch (error) {
		console.log(error);
		alert(error.response.data.message);
		window.location.reload();
	}
};

export const signIn = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);
		const action = { type: actionTypes.AUTH, data: data };
		dispatch(action);
		navigate("/");
	} catch (error) {
		console.log(error.response.data);
		alert(error.response.data.message);
		window.location.reload();
	}
};
