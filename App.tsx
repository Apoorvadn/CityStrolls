import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { PaperProvider, MD2DarkTheme, MD2LightTheme } from 'react-native-paper';
import { expo } from './app.json';
import { AppRegistry } from 'react-native';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import merge from 'deepmerge';

import WelcomeScreen from './screens/welcomeScreen';
import MainScreen from './screens/mainScreen';
import Hotels from './screens/hotelsAndStaysScreen';
import Restaurants from './screens/restaurentsScreen';
import Destinations from './screens/destinationsScreen';

export default function App() {
  const CombinedDefaultTheme = merge(MD2LightTheme, NavigationDefaultTheme);
  const CombinedDarkTheme = merge(MD2DarkTheme, NavigationDarkTheme);
  const [isThemeDark, setIsThemeDark] = useState(false);

  const Stack = createStackNavigator();

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="CityStrolls" component={MainScreen} />
          <Stack.Screen name="HOTELS" component={Hotels} />
          <Stack.Screen name="RESTAURANTS" component={Restaurants} />
          <Stack.Screen name="DESTINATIONS" component={Destinations} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent(expo.name, () => App);