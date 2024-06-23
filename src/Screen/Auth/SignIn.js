import React, {Component, useEffect, useState} from 'react';
import * as Yup from 'yup';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeView from '../../Component/SafeView';
import { Icon, Input, VStack} from 'native-base';
import {calcH, calcW} from '../../utils/Common';
import AppFormField from '../../Component/Form/AppFormField';
import {AppForm} from '../../Component/Form';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {assetsImages} from '../../utils/assets';
import routes from '../../Navigation/routes';
import SubmitButton from '../../Component/Form/SubmitButton';
import {colorSet, mainColor} from '../../utils/Color';

import { Font } from '../../utils/font';
import User from '../../../assets/Sign_In/icon-user.svg'
import Password from '../../../assets/Sign_In/icon-password.svg'
import OpenEye from '../../../assets/Sign_In/icon-open-eye.svg'
import ClosedEye from '../../../assets/Sign_In/icon-closed-eye.svg'
import authService from '../../api/auth';
import { toasterr, toastr } from '../../utils/commonToast';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
});

const initialValues = {
  // email: 'wstest@gmail.com',
  // password: '502389',
  email: '',
  password: '',
};


const SignIn = props => {
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);

  
  const handleSubmit = async ({email, password}) => {
    const data = {
      email: email,
      password: password,
    };
    console.log('data', data);
   await authService.Login(data)
   .then((res)=> {
    console.log("res login", res.data)
    if(res.data.status == 0){
      toastr.showToast("Login Successful")
      props.navigation.navigate(routes.Dashboard)
    }else{
      toasterr.showToast("Incorrect parameters")
    }
  })
   .catch((err)=> {
    console.log("err login", err)
    toasterr.showToast("")
  })
  };

  return (
    <SafeView>
     
      <ImageBackground source={assetsImages.backImage} resizeMode='cover' style={{flex: 1, justifyContent: "center"}}>
      <View style={styles.firstContainer}>
        <View style={styles.logoContainer}>
        <Image source={assetsImages.logo} resizeMode='contain' style={{width: calcW(0.06), height: calcH(0.06), marginEnd: calcW(0.01)}}/>
        <Text style={{fontFamily: Font.ExtraBold, fontSize: 15,textDecorationLine: 'underline', color: colorSet.primarycolor }}>HIDROMAS</Text>
        </View>
        <Text style={{color: "#000", fontWeight: "bold", fontSize: 25,marginBottom: calcH(0.06)}}>Sign In</Text>
        </View>
      <View style={styles.inputContainer}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              <AppFormField
                label="Username"
                placeholder="admin@gmail.com"
                name="email"
                keyboardType="email-address"
                InputLeftElement={
                  <User width={calcW(0.06)} height={calcH(0.05)}/>

                }
                // value={values.email}
                // onChangeText={handleSubmit('email')}
              />
              <AppFormField
                label="Password"
                placeholder="*****"
                name="password"
                icon="lock"
                autoCapitalize="none"
                secureTextEntry={show}
                // value={values.password}
                // onChangeText={handleSubmit('password')}
                InputLeftElement={
                  <Password width={calcW(0.08)} height={calcH(0.07)}/>

                }
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    {show? <OpenEye width={calcW(0.09)} height={calcH(0.07)}/>:  
                    <ClosedEye width={calcW(0.09)} height={calcH(0.07)}/>}
                  </Pressable>
                }
              />
              <View style={styles.secondContainer}>
               
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(routes.ForgetPassword)
                  }>
                  <Text style={styles.text}>
                    Forget Password?{' '}
                  </Text>
                </TouchableOpacity>
              </View>
              <SubmitButton title={'Sign In'} loading={loading} />
            </AppForm>
           
           
           
          </View>
      </ImageBackground>
    </SafeView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: calcW(0.15),
    paddingTop: calcH(0.05)
  },
  logoContainer: {
    flexDirection: "row", alignItems: "center", marginBottom: calcH(0.05)
  },

  inputContainer: {
    backgroundColor: '#fff',
    flex: 1,
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    elevation: 5,
    shadowColor: '#064681',
    padding: 25,
  },
  secondContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 12,
    // alignItems: 'center',
    marginTop: calcH(0.02),
  },
  text: {
    // fontFamily: Font.Bold,
   alignSelf: 'flex-end',
    color: '#000',
  },
});
