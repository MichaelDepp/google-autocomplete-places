const initialState = {
	searchedPlaces: [],
};

const ADD_PLACE = 'ADD_PLACE';

const placesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PLACE:
			const newLocation = action.location;
			const isDescriptionMatch = state.searchedPlaces.some((place) => place.description === newLocation.description);

			if (!isDescriptionMatch) {
				return {
					...state,
					searchedPlaces: [...state.searchedPlaces, newLocation],
				};
			}
			return state; // If the description already exists, return the current state

		default:
			return state;
	}
};

export default placesReducer;
