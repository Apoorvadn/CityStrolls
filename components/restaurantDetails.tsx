import { FC, useState } from 'react'
import { Text, Icon, SegmentedButtons } from 'react-native-paper';
import { View, StyleSheet, ScrollView, Image, SafeAreaView, Linking } from "react-native";

import { Restaurant } from "../interfaces/restaurant";
import { StarRating } from './starComponent';
import { colors } from '../assets/colors/globalColors';

interface RestaurantDetailsProps {
    item: Restaurant;
}


const RestaurantDetails: FC<RestaurantDetailsProps> = ({ item }) => {
    const [imageSelection, setImageSelection] = useState('Gallery');
    const images = imageSelection === 'Gallery' ? item.avatar : item.food;


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <SafeAreaView style={styles.segmentedButton}>
                    <SegmentedButtons
                        value={imageSelection}
                        onValueChange={setImageSelection}
                        buttons={[
                            {
                                value: 'Gallery',
                                label: 'Gallery',
                            },
                            {
                                value: 'Food',
                                label: 'Food',
                            },
                        ]}
                    />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToEnd={true}>
                        {images.map((url) => {
                            return (
                                <View >
                                    <View>
                                        <Image key={url} style={styles.image} source={{ uri: url }} />
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </SafeAreaView>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <StarRating rating={item.ratings} />
                    <Text style={{ color: "gold", fontWeight: 'bold', textAlign: 'center', fontSize: 17, }}>Price: {item.price}</Text>
                </View>
                <View style={{ top: 6 }}>
                    <Text>Timings: {item.timings}</Text>
                </View>
                <View style={{ flexDirection: 'row', top: 40 }}>
                    <Icon source="map-marker" size={20} />
                    <Text style={{ fontSize: 14, left: 5 }}>{item.address}</Text>
                </View>
                <View style={{ top: 78 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon source="web" size={20} />
                        <Text style={{ fontSize: 14, left: 5, color: colors.brightBlue }} onPress={() => Linking.openURL(item.website)}>
                            WEBSITE
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', top: 5 }}>
                        <Icon source="phone" size={20} />
                        <Text style={{ fontSize: 14, left: 5 }}>{item.contact}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    segmentedButton: {
        flex: 1,
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#ecf0f1'
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
        marginTop: 8

    },
    detailsContainer: {
        bottom: 430,
        width: 310,
        marginLeft: 40,
        marginTop: 160,
        elevation: 6
    }
})

export default RestaurantDetails;

