import { FC } from 'react'
import { ScrollView, Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Hotel } from "../interfaces/hotel";
import { colors } from '../assets/colors/globalColors';

interface HorizontalListViewProps {
    items: Hotel[]
    navigation: any;
}

export enum Screens {
    HOTELS = 'HOTELS',
    RESTAURANTS = 'RESTAURANTS',
    DESTINATIONS = 'DESTINATIONS'
}

const HorizontalListView: FC<HorizontalListViewProps> = ({ items, navigation }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {items.map((item) => {
                return (
                    <TouchableOpacity style={styles.recommendedImageContainer} onPress={() => navigation.navigate(items[0].type, { item })}>
                        <View style={styles.cardContainer}>
                            <View style={styles.card}>
                                <Image key={item.avatar[0]} style={styles.image} source={{ uri: item.avatar[0] }} />
                                <Text style={styles.title}>{item.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    title: {
        margin: 24,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.grey
    },
    cardContainer: {
        justifyContent: 'center'
    },
    card: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 10,
        width: 200
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 6,
        marginTop: 10,
        top: 16
    },
    recommendedImageContainer: {
        width: 210,
        height: 260,
        margin: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    }
})

export default HorizontalListView;