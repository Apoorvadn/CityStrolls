import { Card, TextInput, PaperProvider, Text, Avatar, TouchableRipple } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { colors } from "../assets/colors/globalColors";
import HorizontalListView from "../components/horizontalListView";
import { useState, useEffect } from "react";

import { getDataFromServer } from "../service/storeService";
import { Hotel, HotelProps } from "../interfaces/hotel";

function MainScreen({ navigation }) {
    const [horizontalListData, setHorizontalListData] = useState([]);
    const [isfetching, setIsFetching] = useState(true);
    const [hotels, setHotels] = useState<Hotel[]>([]);


    useEffect(() => {
        const asyncFnc = async () => {
            setIsFetching(true);
            const allData = await getDataFromServer('hotels') || [];
            setIsFetching(false);
            setHotels(allData);
        }
        asyncFnc();
    }, []);


    return (
        <PaperProvider>
            <Card>
                <Card.Cover style={styles.imageContainer} source={require('../assets/main.jpg')} />
            </Card>
            <TextInput
                mode='flat'
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
                    <TouchableRipple onPress={() => { navigation.navigate('Restaurant') }}>
                        <Avatar.Icon size={60} icon='food' color="white" style={{ backgroundColor: colors.orange }} />
                    </TouchableRipple>
                    <Text style={{ color: colors.grey, fontWeight: 'bold', fontSize: 16 }}>Restaurant</Text>
                </View>
                <View style={styles.catagoryContainer}>
                    <TouchableRipple onPress={() => { navigation.navigate('Destinations') }}>
                        <Avatar.Icon size={60} icon='tent' color="white" style={{ backgroundColor: colors.orange }} />
                    </TouchableRipple>
                    <Text style={{ color: colors.grey, fontWeight: 'bold', fontSize: 16 }}>Destinations</Text>
                </View>
            </View>
            <View>
                <HorizontalListView items={horizontalListData} navigation={navigation} />
            </View>
        </PaperProvider>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: 410,
        height: 300,
        borderRadius: 60
    },
    textInput: {
        bottom: 290,
        width: 350,
        marginLeft: 30,
    },
    catagory: {
        bottom: 30,
        fontWeight: 'bold',
        left: 20,
        color: colors.grey
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