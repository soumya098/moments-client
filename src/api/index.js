import axios from "axios";

const url = "http://localhost:5000";
//const url = "https://memories-backend-server.herokuapp.com/posts";

const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
	const currUser = JSON.parse(localStorage.getItem("user"));
	if (currUser) {
		req.headers.authorization = `Bearer ${currUser?.token}`;
	}
	return req;
});

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (sQuery) => API.get(`/posts/search?q=${sQuery.search || "none"}&tags=${sQuery.tags}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/like`);

// //for auth
export const signUp = (formData) => API.post("/user/signup", formData);
export const signIn = (formData) => API.post("/user/signin", formData);
