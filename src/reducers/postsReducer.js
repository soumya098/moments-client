import * as actionTypes from "../actions/actionTypes.js";

const initialState = { posts: [], currPage: 0, totalPages: 0, isLoading: true };

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.START_LOADING:
			return { ...state, isLoading: true };
		case actionTypes.END_LOADING:
			return { ...state, isLoading: false };
		case actionTypes.FETCH_ALL:
			return { ...state, posts: action.payload.posts, currPage: action.payload.currPage, totalPages: action.payload.totalPages };
		case actionTypes.FETCH_BY_SEARCH:
			return { ...state, posts: action.payload };
		case actionTypes.CREATE:
			return { ...state, posts: [...state.posts, action.payload] };
		case actionTypes.UPDATE:
			return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
		case actionTypes.DELETE:
			return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
		case actionTypes.LIKE:
			return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
		default:
			return state;
	}
};

export default postsReducer;
//reducers are fuction that return the state depending on the action types
