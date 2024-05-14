import { FC, useState, useMemo, useEffect } from 'react';

import { View, StyleSheet } from 'react-native';

import { destination, destinationProps } from '../interfaces/destination';
import DestinationDetails from '../components/destinationDetails';

const Destination: FC<destinationProps> = ({ navigation, route }) => {
    const [destination, setdestination] = useState<destination>();
    const params = useMemo(() => route.params, [route.params]);

    useEffect(() => {
        if (route?.params?.item) {
            setdestination(route?.params?.item)
        }
    }, [route?.params?.item])


    return (
        <View>
            {destination && <DestinationDetails item={destination} />}
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

export default Destination;