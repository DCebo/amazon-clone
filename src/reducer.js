export const initialState = {
	basket: [],
};

// selector to attain total in data layer
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
				// price: [...state.price, action.item],
			};

		default:
			return state;
	}
};

export default reducer;
