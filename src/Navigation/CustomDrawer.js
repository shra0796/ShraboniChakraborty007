import {Avatar, Divider} from 'native-base';
import React, {Component, useContext} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {assetsImages} from '../utils/assets';
import {calcH, calcW} from '../utils/Common';
import {Font} from '../utils/font';
import routes from './routes';
import MailIcon from '../../assets/HambugerMenu/Icon-mail.svg'
import CallIcon from '../../assets/HambugerMenu/Icon-call.svg'
import SettingsIcon from '../../assets/HambugerMenu/settings.svg'
import CheckINIcon from '../../assets/HambugerMenu/check-ins.svg'
import ExpensesIcon from '../../assets/HambugerMenu/my-expenses.svg'
import LogoutIcon from '../../assets/HambugerMenu/logout.svg'
import AppIcon from '../../assets/HambugerMenu/app-icon.svg'


const CustomDrawer = props => {
  
  const doLogout = () => {
    Alert.alert(
      //title
      'Logout',
      //body
      'Are you sure want to logout ?',
      [
        {text: 'Yes', onPress: () => navigateToLogout()},
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };

  // const navigateToLogout = async () => {
  //   await AsyncStorage.removeItem(TOKEN);
  //   setToken('');
  //   setProfileContextData('');
  //   props.navigation.closeDrawer();
  //   props.navigation.navigate(routes.Home);
  // };


  return (
    <View style={styles.container}>
     <ImageBackground source={assetsImages.menubg} resizeMode='cover'>
        <View style={styles.firstContainer}>
          
          <Image
            source={
             
               
                  assetsImages.user
            }
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              resizeMode: 'cover',
            }}
          />
          <View
            style={{
              marginLeft: 5,
              // backgroundColor: 'red',
              width: '80%',
            }}>
            <Text
              onPress={() => props.navigation.navigate(routes.Account)}
              style={{
                color: '#fff',
                fontSize: calcW(0.06),
                fontFamily: Font.Bold,
              }}>
              
                Alpaslan Demirci
            </Text>
            <View style={{flexDirection: "row", alignItems: "center"
            }}>
              <MailIcon width={calcW(0.04)} height={calcH(0.04)}/>
            <Text
              // onPress={() => props.navigation.navigate(routes.Account)}
              style={{
                color: '#fff',
                fontSize: calcW(0.03),
                fontFamily: Font.Regular,
              }}>
              mailid@domain.com
            </Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"
            }}>
              <CallIcon width={calcW(0.04)} height={calcH(0.04)}/>
            <Text
              // onPress={() => props.navigation.navigate(routes.Account)}
              style={{
                color: '#fff',
                fontSize: calcW(0.03),
                fontFamily: Font.Regular,
              }}>
              +915685787857
            </Text>
            </View>
          </View>
        </View>
        </ImageBackground>
      {/* )} */}

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
          marginLeft: 0,
          borderWidth: 0,
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            marginVertical: calcH(0.02),
            alignSelf: 'center',
            // alignItems: 'center',
            padding: 15,
            marginBottom: calcH(0.2)
          }}>
            <TouchableOpacity  style={styles.item}>
              <View style={styles.iconContainer}>
            <SettingsIcon width={calcW(0.08)} height={calcH(0.08)}/>
            </View>
            <Text style={styles.menufont}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.item}>
              <View style={styles.iconContainer}>
            <CheckINIcon width={calcW(0.08)} height={calcH(0.08)}/>
            </View>
            <Text style={styles.menufont}>Check-Ins</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.item}>
              <View style={styles.iconContainer}>
            <ExpensesIcon width={calcW(0.08)} height={calcH(0.08)}/>
            </View>
            <Text style={styles.menufont}>My Expenses</Text>
            </TouchableOpacity>
        
        </View>
        <View style={{ width: calcW(0.8),flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <TouchableOpacity onPress={()=> props.navigation.navigate(routes.SignIn)} style={styles.item}>
              
            <LogoutIcon width={calcW(0.08)} height={calcH(0.08)}/>
            <Text style={styles.menufont}>Logout</Text>
            </TouchableOpacity>
            <AppIcon width={calcW(0.2)} height={calcH(0.2)}/>

        </View>
      </ScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    flexDirection: 'row',
    // flex: 1,
    padding: 15,
    alignItems: 'center',
    //justifyContent: 'space-between',
    // backgroundColor: '#064681',
  },
  secondContainer: {
    marginTop: calcH(0.02),
    padding: 15,
  },
  item: {flexDirection: 'row', marginBottom: calcH(0.05), padding: 3, alignItems: 'center'},
  menufont: {
    color: '#000', fontFamily: Font.Medium, fontSize: calcW(0.045)
  },
  iconContainer:{elevation:2, shadowColor: "#000", borderRadius: 4,width: calcW(0.1), height: calcH(0.06), justifyContent: "center", alignItems: "center", marginRight: calcW(0.03)}
});
