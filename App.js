import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookScreen from './screens/BookScreen';
import LibraryScreen from './screens/LibraryScreen';
import SplashScreen from './screens/SplashScreen';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerStyle: {
          backgroundColor: '#008A9A' ,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}