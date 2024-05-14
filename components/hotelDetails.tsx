import { FC } from 'react'
import { Text, Icon } from 'react-native-paper';
import { View, StyleSheet, ScrollView, Image, SafeAreaView, Linking } from "react-native";

import { Hotel } from "../interfaces/hotel";
import { StarRating } from './starComponent';
import { colors } from '../assets/colors/globalColors';

interface HotelDetailsProps {
    item: Hotel;
}


const HotelDetails: FC<HotelDetailsProps> = ({ item }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <ScrollView snapToEnd={true}
                    horizontal showsHorizontalScrollIndicator={false}>
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <StarRating rating={item.rating} />
                    <Text style={{ color: "gold", fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>Price: {item.price}</Text>
                </View>
                <View style={{ flexDirection: 'row', top: 5 }}>
                    <Icon source="map-marker" size={20} />
                    <Text style={{ fontSize: 14, left: 5 }}>{item.address}</Text>
                </View>
                <View style={{ top: 14, alignItems: 'center' }}>
                    <Text style={{ textAlign: 'left' }}>Description: {item.description}</Text>
                </View>
                <View style={{ flexDirection: 'row', top: 36 }}>
                    <Icon source="web" size={20} />
                    <Text style={{ left: 5, color: colors.brightBlue }} onPress={() => Linking.openURL(item.website)}>
                        WEBSITE
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', top: 38 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon source="phone" size={20} />
                        <Text style={{ fontSize: 14, left: 5 }}>{item.contact}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon source="email" size={20} />
                        <Text style={{ fontSize: 14, left: 5 }}> {item.email}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        width: 350,
        height: 710,
        borderRadius: 20,
        left: 10,
        backgroundColor: "white",
        padding: 10,
        elevation: 4,
    },
    image: {
        width: 330,
        height: 400,
        borderRadius: 10,
    },
    detailsContainer: {
        bottom: 430,
        width: 310,
        marginLeft: 40,
        marginTop: 130,
        elevation: 6
    }
})

export default HotelDetails;

