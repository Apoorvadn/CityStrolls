import { Appbar } from 'react-native-paper';
import { FC, useState, useMemo, useEffect } from 'react';

import { View, StyleSheet } from 'react-native';

import { Hotel, HotelProps } from '../interfaces/hotel';
import HotelDetails from '../components/hotelDetails';

const Hotels: FC<HotelProps> = ({ navigation, route }) => {
    const [hotel, setHotel] = useState<Hotel>();
    const [isfetching, setIsFetching] = useState(true);
    const params = useMemo(() => route.params, [route.params]);

    useEffect(() => {
        if (route?.params?.hotel) {
            setHotel(route?.params?.hotel)
        }
    }, [route?.params?.hotel])


    return (
        <View>
            {hotel && <HotelDetails item={hotel} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        marginTop: 30,
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardContainer: {
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 10,
        width: 220,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
})

export default Hotels;