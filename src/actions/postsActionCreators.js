import * as api from "../api";
import * as actionTypes from "./actionTypes";

// Action Creatiors are fuctions that return action
// const getPosts = () => {
// 	const action = { type: actionTypes.FETCH_ALL, payload: [] };
// 	return action;
// };

// Here we using reduc-thunk to create asyncrhonous action
export const getPosts = (page) => async (dispatch) => {
	dispatch({ type: actionTypes.START_LOADING });
	try {
		const { data } = await api.fetchPosts(page);
		const action = { type: actionTypes.FETCH_ALL, payload: data };
		dispatch(action);
		console.log("is loading false");
	} catch (error) {
		console.log(error);
	}
	dispatch({ type: actionTypes.END_LOADING });
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
	dispatch({ type: actionTypes.START_LOADING });
	try {
		const { data } = await api.fetchPostsBySearch(searchQuery);
		const action = { type: actionTypes.FETCH_BY_SEARCH, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error);
	}
	dispatch({ type: actionTypes.END_LOADING });
};

export const createPost = (post) => async (dispatch) => {
	dispatch({ type: actionTypes.START_LOADING });
	try {
		const { data } = await api.createPost(post);
		const action = { type: actionTypes.CREATE, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error);
	}
	dispatch({ type: actionTypes.END_LOADING });
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		const action = { type: actionTypes.UPDATE, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		const action = { type: actionTypes.DELETE, payload: id };
		dispatch(action);
	} catch (error) {
		console.log(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		const action = { type: actionTypes.LIKE, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error);
	}
};
