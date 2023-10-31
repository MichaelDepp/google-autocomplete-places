import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_PLACES_API_KEY = 'YOUR API KEY';

const App = () => {
	const [selectedLocation, setSelectedLocation] = useState({
		latitude: 3.1470984, // Maybank Location
		longitude: 101.6990835, // Maybank Location
	});
	const mapRef = useRef(null);

	const { height, width } = Dimensions.get('window');
	const LATITUDE_DELTA = 0.009;
	const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

	const marker = {
		latlng: selectedLocation,
	};

	const updateLocation = (data, details) => {
		const { lat, lng } = details.geometry.location;
		const newLocation = {
			latitude: lat,
			longitude: lng,
		};
		setSelectedLocation(newLocation);
		mapRef.current.animateToRegion({
			...newLocation,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		});
	};

	return (
		<View style={styles.container}>
			<MapView
				ref={mapRef}
				style={styles.container}
				initialRegion={{
					latitude: selectedLocation.latitude,
					longitude: selectedLocation.longitude,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA,
				}}
			>
				<Marker coordinate={marker.latlng} />
			</MapView>
			<View style={styles.googlePlaceContainer}>
				<GooglePlacesAutocomplete
					styles={{
						textInputContainer: textInputContainer,
					}}
					placeholder="Search"
					query={{
						key: GOOGLE_PLACES_API_KEY,
						language: 'en',
					}}
					fetchDetails
					onPress={updateLocation}
					onFail={(error) => console.error(error)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ecf0f1',
	},
	textInputContainer: {
		backgroundColor: 'rgba(0,0,0,0)',
		borderTopWidth: 0,
		borderBottomWidth: 0,
		width: '100%',
	},
	googlePlaceContainer: {
		position: 'absolute',
		top: 50,
		left: 0,
		right: 0,
		width: '100%',
		alignSelf: 'center',
		paddingHorizontal: 30,
	},
});

export default App;
