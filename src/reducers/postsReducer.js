import * as actionTypes from "../actions/actionTypes.js";

const initialState = [];

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_ALL:
			return action.payload;
		case actionTypes.CREATE:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default postsReducer;
//reducers are fuction that return the state depending on the action types
