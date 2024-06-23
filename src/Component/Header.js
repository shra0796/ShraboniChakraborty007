import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons.js';
import {assetsIcon, assetsImages} from '../utils/assets.js';
import {calcH, calcW} from '../utils/Common.js';
import {Heading, Input} from 'native-base';
import {Font} from '../utils/font.js';
import { colorSet } from '../utils/Color.js';


const theme = {
  colors: {
    primary: '#fff',
    background: '#fff',
  },
};

const HeaderComponent = ({
  headingName,
  icon,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          //justifyContent: 'space-between',
          alignItems: 'center',
          flex: 0.45,
          // backgroundColor: 'red',
        }}>
          <Image source={icon} style={styles.icon} />
        

       
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={assetsImages.logo} resizeMode='contain' style={{width: calcW(0.06), height: calcH(0.06), marginEnd: calcW(0.01)}}/>
        <Text style={{fontFamily: Font.ExtraBold, fontSize: 15,textDecorationLine: 'underline', color: colorSet.primarycolor }}>HIDROMAS</Text>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 5,
    paddingHorizontal: 15,
    flex: 1,

    shadowColor: '#064681',
    borderBottomWidth: 0.5,
    borderColor: '#F6F6F6',
    elevation: 0,
    // height: calcH(0.08),
  },
  icon: {
    height: calcH(0.04),
    width: calcW(0.04),
    resizeMode: 'contain',
    // tintColor: '#fff',
  },
  logoContainer: {
    flexDirection: "row", alignItems: "center"
  }
});

export default HeaderComponent;
