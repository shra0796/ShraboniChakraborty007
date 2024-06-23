import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  LogBox,
} from 'react-native';

import Navigation from './src/Navigation';
import SignIn from './src/Screen/Auth/SignIn';
import { NativeBaseProvider } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    //SplashScreen.hide();
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  LogBox.ignoreLogs([
    'Animated: `useNativeDriver`',
    'EventEmitter.removeListener',
    'VirtualizedLists should never be nested',
    'Warning: Encountered two children with the same key',
  ]);

  return (
    <NativeBaseProvider>
<StatusBar
            backgroundColor={Platform.select({
              ios: 'white',
              android: 'transparent',
            })}
            barStyle={Platform.select({
              ios: 'dark-content',
              android: 'dark-content',
            })}
          />
          <Navigation/>
          </NativeBaseProvider>
        
  );
};

export default App;

const styles = StyleSheet.create({});
