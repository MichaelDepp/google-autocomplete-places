import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import MapContainer from "../components/MapContainer";
import Autocomplete from "../components/Autocomplete";

import { useDispatch, useSelector } from "react-redux"
import { addPlace } from "../context/actions/placesActions"

const HomeScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 3.1470984, // Location
    longitude: 101.6990835, // Location
  });
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  const searchedPlaces = useSelector((state) => state.places.searchedPlaces);

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
    const location = {
      description: data.description,
      geometry: details.geometry,
    }
    dispatch(addPlace(location));
  };

  return (
    <View style={styles.container}>
      <MapContainer selectedLocation={selectedLocation} mapRef={mapRef}/>
      <Autocomplete onUpdateLocation={updateLocation} searchedPlaces={searchedPlaces}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
});

export default HomeScreen
