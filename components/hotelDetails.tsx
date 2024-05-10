import { FC } from 'react'
import { Text, Icon } from 'react-native-paper';
import { View, StyleSheet, ScrollView, Image } from "react-native";

import { Hotel } from "../interfaces/hotel";
import { StarRating } from './starComponent';

interface HotelDetailsProps {
    item: Hotel;
}


const HotelDetails: FC<HotelDetailsProps> = ({ item }) => {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <ScrollView horizontal>
                    {item.avatar.map((url) => {
                        return (
                            <View >
                                <View>
                                    <Image key={url} style={styles.image} source={{ uri: url }} />
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                <View>
                    <StarRating rating={item.rating} />
                </View>
                <View style={{ flexDirection: 'row', top: 5 }}>
                    <Icon source="map-marker" size={20} />
                    <Text style={{ fontSize: 15 }}>{item.address}</Text>
                </View>
                <View style={{ top: 10 }}>
                    <Text>Amenities: {item.amenities}</Text>
                </View>
                <View style={{ top: 10 }}>
                    <Text>Description: {item.description}</Text>
                    <Text>Website: {item.website}</Text>
                    <Text>Contact: {item.contact}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>Price: {item.price}</Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        marginTop: 30,
    },
    cardContainer: {
        justifyContent: 'center',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        width: 350,
        height: 720,
        borderRadius: 20,
        left: 10,
        backgroundColor: "white",
        top: 60
    },
    image: {
        width: 348,
        height: 400,
        borderRadius: 10,

    },
    detailsContainer: {
        bottom: 430,
        width: 310,
        marginLeft: 40,
        marginTop: 150
    }
})

export default HotelDetails;

