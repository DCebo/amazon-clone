import React, {
	creatContext,
	useContext,
	useReducer,
	createContext,
} from "react";

// Prepares the data layer
export const StateContext = createContext();

// Wrap our app and proide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// Pull information from the Data Layer
export const useStateValue = () => useContext(StateContext);
