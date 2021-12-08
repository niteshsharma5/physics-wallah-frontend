import { useReducer } from "react";

const initialState = {
	users: {},
	url: "https://pokeapi.co/api/v2/pokemon/",
	fetchingInProgress: false,
	currentPage: 0,
	totalNumberOfPages: -1,
	prev: "",
	next: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USERS":
			return { ...state, users: action.payload };

		case "SET_URL":
			return { ...state, url: action.payload };

		case "SET_FETCH_IN_PROGRESS":
			return { ...state, fetchingInProgress: action.payload };

		case "SET_PREV":
			return { ...state, prev: action.payload || "" };

		case "SET_NEXT":
			return { ...state, next: action.payload || "" };

		default:
			return state;
	}
};

const useApiReducer = () => useReducer(reducer, initialState);

export default useApiReducer;
