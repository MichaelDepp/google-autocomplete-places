import React from 'react';
import HomeScreen from './screens/MainScreen';
import { Provider } from 'react-redux';
import store from './context/store';

const App = () => {
	return (
		<Provider store={store}>
			<HomeScreen />
		</Provider>
	);
};

export default App;
