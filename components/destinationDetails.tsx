import { FC } from 'react'
import { Text, Icon } from 'react-native-paper';
import { View, StyleSheet, ScrollView, Image } from "react-native";

import { destination } from "../interfaces/destination";
import { colors } from '../assets/colors/globalColors';

interface DestinationDetailsProps {
    item: destination;
}


const DestinationDetails: FC<DestinationDetailsProps> = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToEnd={true}>
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
                <View style={styles.detailItem}>
                    <Text>Timings: {item.timings}</Text>
                </View>
                <View style={{ ...{ flexDirection: 'row' }, ...styles.detailItem }}>
                    <Icon source="map-marker" size={20} />
                    <Text >{item.address}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text >Tags: {item.tags}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text>EntryFee: {item.entryFee}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text>Distance: {item.distance}</Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

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
    },
    detailItem: {
        marginTop: 6
    }
})

export default DestinationDetails;

