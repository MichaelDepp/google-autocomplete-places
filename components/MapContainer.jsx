import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapContainer = ({ selectedLocation, mapRef }) => {
  const { height, width } = Dimensions.get("window");
  const LATITUDE_DELTA = 0.009;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

  return (
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
      <Marker coordinate={selectedLocation} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
});

export default MapContainer;
