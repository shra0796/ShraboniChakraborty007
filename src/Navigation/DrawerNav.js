import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import routes from './routes';
import Dashboard from '../Screen/AfterLogin/Dashboard';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      defaultScreenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width * 0.85,
        },
      }}
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width * 0.85,
        },
        headerShown: false,
      }}>
      
      <Drawer.Screen name={routes.Dashboard} component={Dashboard} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
