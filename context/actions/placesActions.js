const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (location) => {
	return {
		type: ADD_PLACE,
		location,
	};
};
