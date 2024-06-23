import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import routes from './routes';
import SignIn from '../Screen/Auth/SignIn';
import DrawerNavigator from './DrawerNav';


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.SignIn}
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name={routes.Slide} component={Slider} /> */}
        <Stack.Screen name={routes.SignIn} component={SignIn} />
        <Stack.Screen name={routes.Drawertab} component={DrawerNavigator} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
