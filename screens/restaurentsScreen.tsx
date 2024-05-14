import { View, StyleSheet } from 'react-native';
import { FC, useState, useMemo, useEffect } from 'react';


import { Restaurant, RestaurantProps } from '../interfaces/restaurant';
import RestaurantDetails from '../components/restaurantDetails'

const Restaurants: FC<RestaurantProps> = ({ route, navigation }) => {
    const [restaurant, setRestaurant] = useState<Restaurant>();
    const params = useMemo(() => route.params, [route.params]);

    useEffect(() => {
        if (route?.params?.item) {
            setRestaurant(route?.params?.item)
        }
    }, [route?.params?.item])

    return (
        <View>
            {restaurant && <RestaurantDetails item={restaurant} />}
        </View>
    );
}

export default Restaurants;


