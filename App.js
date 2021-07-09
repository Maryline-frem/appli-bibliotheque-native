import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookScreen from './screens/BookScreen';
import LibraryScreen from './screens/LibraryScreen';
import SplashScreen from './screens/SplashScreen';

import { useFonts } from 'expo-font';

export default function App() {

  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    'DancingScript': require('./assets/fonts/DancingScript-VariableFont_wght.ttf')
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerStyle: {
          backgroundColor: '#008A9A' ,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 36,
          fontFamily: 'DancingScript',
        },
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Mes livres" component={LibraryScreen} />
        <Stack.Screen name="Détails du livre" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}