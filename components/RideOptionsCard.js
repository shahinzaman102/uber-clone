import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation, selectOrigin, selectDestination, setTravelTimeInformation } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useNavigation } from '@react-navigation/core';

const data = [
    {
        id: "Uber-X-123",
        title: "Uber X",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
];

// Surge pricing rate
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        if (!origin || !destination) return;

        const fetchTravelTime = async () => {
            try {
                console.log(`Fetching travel time from: ${origin.location.lat},${origin.location.lng} to: ${destination.location.lat},${destination.location.lng}`);
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.location.lat},${origin.location.lng}&destinations=${destination.location.lat},${destination.location.lng}&key=${GOOGLE_MAPS_APIKEY}`
                );
                const data = await response.json();
                console.log("Travel time data:", data);

                if (data.status === "OK" && data.rows[0]?.elements[0]?.status === "OK") {
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
                } else {
                    console.error("Error fetching travel time information");
                }
            } catch (error) {
                console.error("Failed to fetch travel time:", error.message);
            }
        };

        fetchTravelTime();
    }, [origin, destination]);

    return (
        <View style={tw`flex-1 bg-white`}>
            {/* Top Section with Back Button and Dynamic Text */}
            <SafeAreaView style={tw`flex-grow`}>
                <View style={tw`flex-row items-center px-5`}>
                    <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")}
                        style={tw`p-3 rounded-full`}
                    >
                        <Icon name="chevron-left" type="fontawesome" />
                    </TouchableOpacity>
                    <Text style={tw`text-xl flex-grow text-center`}>
                        Select a ride - {travelTimeInformation?.distance?.text || "loading..."}
                    </Text>
                </View>

                {/* Ride Options List */}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: { id, title, multiplier, image }, item }) => (
                        <TouchableOpacity
                            onPress={() => setSelected(item)}
                            style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}
                        >
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: "contain",
                                }}
                                source={{ uri: image }}
                            />
                            <View style={tw`-ml-6`}>
                                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                                <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
                            </View>

                            <Text style={tw`text-xl`}>
                                {new Intl.NumberFormat('en-gb', {
                                    style: 'currency',
                                    currency: 'GBP'
                                }).format(
                                    (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                                )}
                            </Text>

                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>

            {/* Bottom Section with Fixed Choose Button */}
            <View style={tw`absolute bottom-0 w-full bg-white border-t border-gray-200`}>
                <TouchableOpacity
                    disabled={!selected} // Disable if no ride is selected
                    style={tw`py-3 mx-3 my-2 ${selected ? "bg-black" : "bg-gray-300"} rounded`}
                >
                    <Text style={tw`text-center text-white text-xl`}>
                        {selected ? `Choose ${selected.title}` : "Choose"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
