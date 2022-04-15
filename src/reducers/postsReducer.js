import * as actionTypes from "../actions/actionTypes.js";

const initialState = [];

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_ALL:
			return action.payload;
		case actionTypes.CREATE:
			return [...state, action.payload];
		case actionTypes.UPDATE:
			return state.map((item) => (item._id === action.payload._id ? action.payload : item));
		default:
			return state;
	}
};

export default postsReducer;
//reducers are fuction that return the state depending on the action types
