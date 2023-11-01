import { combineReducers } from 'redux';
import placesReducer from './placesReducer';

const myReducer = combineReducers({
	places: placesReducer,
});

export default myReducer;
