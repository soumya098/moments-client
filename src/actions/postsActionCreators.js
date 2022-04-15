import * as api from "../api";
import * as actionTypes from "./actionTypes";

// Action Creatiors are fuctions that return action
// const getPosts = () => {
// 	const action = { type: actionTypes.FETCH_ALL, payload: [] };
// 	return action;
// };

// Here we using reduc-thunk to create asyncrhonous action
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		const action = { type: actionTypes.FETCH_ALL, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		const action = { type: actionTypes.CREATE, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error.message);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		const action = { type: actionTypes.UPDATE, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error.message);
	}
};
