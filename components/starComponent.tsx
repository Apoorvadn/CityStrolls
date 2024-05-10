import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet } from 'react-native';


export const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const partialStar = rating - filledStars;

    return (
        <View style={styles.starRating}>
            {Array(5)
                .fill(0)
                .map((_, i) => (
                    <MaterialCommunityIcons
                        key={i}
                        name={i < filledStars ? 'star' : i < filledStars + partialStar ? 'star-half' : 'star-outline'}
                        size={24}
                        color="gold"
                    />
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    starRating: {
        flexDirection: 'row',
    },
});