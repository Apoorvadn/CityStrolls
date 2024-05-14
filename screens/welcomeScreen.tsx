import { Card, PaperProvider, Text, Button } from "react-native-paper";
import { StyleSheet, Image } from "react-native";


import { colors } from '../assets/colors/globalColors';



function WelcomeScreen({ navigation }) {
    return (
        <PaperProvider>
            <Image style={styles.Imagecontainer} source={require('../assets/Avatar.jpg')} />
            <Card style={styles.cardContainer}>
                <Card.Content style={styles.contentContainer}>
                    <Text style={styles.titleContainer} variant="titleMedium">Explore The City</Text>
                    <Text style={styles.textContainer} variant="bodyMedium">Discover The Best Places To Enjoy Your Vacation</Text>
                </Card.Content>
                <Card.Actions>
                    <Button icon="image-search" mode="contained" onPress={() => navigation.navigate('CityStrolls')}>Explore</Button>
                </Card.Actions>
            </Card>
        </PaperProvider>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    Imagecontainer: {
        width: 415,
        height: 400,
        marginBottom: -180,
        flex: 1,
        borderRadius: 12,

    },
    cardContainer: {
        padding: 16,
        bottom: 10,
        marginHorizontal: 10,
        borderWidth: 1,

    },
    contentContainer: {
        bottom: 80,

    },
    textContainer: {
        fontSize: 16,
        top: 80,
        color: colors.grey,
        right: 20
    },
    titleContainer: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.navyBlue,
        top: 60,
        right: 20
    }
})