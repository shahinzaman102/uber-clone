import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector, useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    // Fit map to origin and destination markers
    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
    }, [origin, destination]);

    // Fetch travel time between origin and destination
    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            try {
                const originLatLng = `${origin.location.lat},${origin.location.lng}`;
                const destinationLatLng = `${destination.location.lat},${destination.location.lng}`;

                console.log("Fetching travel time from:", originLatLng, "to:", destinationLatLng);

                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originLatLng}&destinations=${destinationLatLng}&key=${GOOGLE_MAPS_APIKEY}`
                );

                const data = await response.json();
                console.log("Travel time data:", data);

                if (data.status === "OK" && data.rows[0] && data.rows[0].elements[0]) {
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
                } else {
                    console.error("Error: Unable to retrieve travel time data.");
                }
            } catch (error) {
                console.error("Error fetching travel time:", error);
            }
        };

        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_APIKEY, dispatch]);

    return (
        <MapView
            style={tw`flex-1`}
            ref={mapRef}
            initialRegion={{
                latitude: origin?.location?.lat || 37.78825,
                longitude: origin?.location?.lng || -122.4324,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            region={destination && origin ? {
                latitude: (origin.location.lat + destination.location.lat) / 2,
                longitude: (origin.location.lng + destination.location.lng) / 2,
                latitudeDelta: Math.abs(origin.location.lat - destination.location.lat) * 2,
                longitudeDelta: Math.abs(origin.location.lng - destination.location.lng) * 2,
            } : undefined}
        >
            {origin?.location && destination?.location && (
                <MapViewDirections
                    origin={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    destination={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}

            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="Destination"
                    description={destination.description}
                    identifier="destination"
                />
            )}
        </MapView>
    );
};

export default Map;

const styles = StyleSheet.create({});
