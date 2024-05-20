import { Card, TextInput, PaperProvider, Text, Avatar, TouchableRipple } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { colors } from "../assets/colors/globalColors";
import HorizontalListView, { Screens } from "../components/horizontalListView";
import { useState, useEffect } from "react";

import { getDataFromServer, updateDataToServer } from "../service/storeService";
import { Hotel, HotelProps } from "../interfaces/hotel";
import { useQuery } from "@tanstack/react-query";
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

function MainScreen({ navigation }) {
    const { isLoading: isHotelLoading, error: hotelErrorHandling, data: hotels } = useQuery({
        queryKey: ['hotel'],
        queryFn: () => getDataFromServer('hotels'),
    });


    const { isLoading: isRestaurentLoading, error: restaurantErrorHandling, data: restaurant } = useQuery({
        queryKey: ['restaurant'],
        queryFn: () => getDataFromServer('restaurant'),
    });
    const { isLoading: isDestinationLoading, error: destinationErrorHandling, data: destination } = useQuery({
        queryKey: ['destination'],
        queryFn: () => getDataFromServer('destination'),
    });

    const [horizontalListData, setHorizontalListData] = useState(hotels);
    const [restaurants, setRestaurants] = useState<Hotel[]>([]);
    const [destinations, setDestinations] = useState<Hotel[]>([]);

    useEffect(() => {
        if (!isHotelLoading && !hotelErrorHandling && hotels) {
            setHorizontalListData(hotels);
        }
    }, [isHotelLoading, hotelErrorHandling, hotels]);

    useEffect(() => {
        const asyncFnc = async () => {
            const restaurantsData = await getDataFromServer('restaurant') || [];
            const destinationData = await getDataFromServer(Screens.DESTINATIONS) || [];
            setDestinations(destinationData);
            setRestaurants(restaurantsData);
        }
        asyncFnc();
    }, []);


    return (
        <PaperProvider>
            <Card style={styles.card}>
                <Card.Cover style={styles.imageContainer} source={require('../assets/main.jpg')} />
            </Card>
            <TextInput
                mode='outlined'
                label="Let's Discover"
                right={<TextInput.Icon icon="search-web"
                />}
                style={styles.textInput}
            />
            <Text style={styles.catagory}
                variant="titleLarge" >Catagory</Text>
            <View style={styles.iconContainer}>
                <View style={styles.catagoryContainer}>
                    <TouchableRipple onPress={() => { navigation.navigate('Welcome') }}>
                        <Avatar.Icon size={60} icon='home' color="white" style={{ backgroundColor: colors.orange }} />
                    </TouchableRipple>
                    <Text style={{ color: colors.grey, fontWeight: 'bold', fontSize: 16 }} >Home</Text>
                </View>
                <View style={styles.catagoryContainer}>
                    <TouchableRipple onPress={() => {
                        setHorizontalListData(hotels)
                    }}>
                        <Avatar.Icon size={60} icon='home-heart' color="white" style={{ backgroundColor: colors.orange }} />
                    </TouchableRipple>
                    <Text style={{ color: colors.grey, fontWeight: 'bold', fontSize: 16 }} >Hotel</Text>
                </View>
                <View style={styles.catagoryContainer}>
                    <TouchableRipple onPress={() => {
                        setHorizontalListData(restaurants)
                    }}>
                        <Avatar.Icon size={60} icon='food' color="white" style={{ backgroundColor: colors.orange }} />
                    </TouchableRipple>
                    <Text style={{ color: colors.grey, fontWeight: 'bold', fontSize: 16 }}>Restaurant</Text>
                </View>
                <View style={styles.catagoryContainer}>
                    <TouchableRipple onPress={() => {
                        setHorizontalListData(destinations)
                    }}>
                        <Avatar.Icon size={60} icon='tent' color="white" style={{ backgroundColor: colors.orange }} />
                    </TouchableRipple>
                    <Text style={{ color: colors.grey, fontWeight: 'bold', fontSize: 16 }}>Destinations</Text>
                </View>
            </View>
            <View>
                {isHotelLoading ? (
                    <ContentLoader backgroundColor="white" foregroundColor="lightgrey">
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                ) : (
                    <HorizontalListView items={horizontalListData || []} navigation={navigation} />
                )}
            </View>
        </PaperProvider>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    card: {
        height: 275,
        borderRadius: 8,
        margin: 16,
        elevation: 6,
        alignItems: 'center',
    },
    imageContainer: {
        width: 380,
        height: 300,
    },
    textInput: {
        bottom: 290,
        width: 350,
        marginLeft: 30,
        borderRadius: 16,
        opacity: 0.5
    },
    catagory: {
        bottom: 25,
        fontWeight: 'bold',
        left: 20,
        color: colors.grey,

    },
    catagoryContainer: {
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 12,
    },
    subText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})