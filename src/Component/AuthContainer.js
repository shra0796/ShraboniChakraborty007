import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {calcH, calcW} from '../utils/Common';
import LinearGradient from 'react-native-linear-gradient';
import {colorSet} from '../utils/Color';
import HeaderComponent from './Header';
import {tabBarIcon} from './ScreenComponenet/BottomTabItem';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Font} from '../utils/font';
import {assetsIcon, assetsImages} from '../utils/assets';

const AuthContainer = ({
  title,
  subtitle,
  children,
  style,
  header,
  img,
  icons,
  headerName,
  searchPress,
  bellOnPress,
  onPress,
}) => {
  return (
    <View style={{flex: 1}}>
   <ImageBackground source={assetsImages.backImage} resizeMode='cover' style={{flex: 1}}/>
    </View>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: calcW(0.08),
    marginBottom: calcH(0.015),
    color: '#000',
  },
  subtitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: calcW(0.035),
    fontWeight: '600',
    color: '#000',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  titlecontainer: {
    marginBottom: calcH(0.06),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: colorSet.backgroundColor,

    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    elevation: 5,
    shadowColor: '#064681',
  },
  view: {
    flex: 1,
    backgroundColor: colorSet.backgroundColor,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    //marginTop: calcH(0.08),
  },
  icon: {
    height: calcH(0.045),
    width: calcW(0.045),
    resizeMode: 'contain',
    tintColor: '#000',
  },
});
