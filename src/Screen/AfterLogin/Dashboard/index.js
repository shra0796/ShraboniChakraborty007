import { Center, HStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Image, FlatList } from 'react-native'
import { SafeView } from '../../../Component'
import HeaderComponent from '../../../Component/Header'
import { assetsIcon, assetsImages } from '../../../utils/assets'
import CheckIn from '../../../../assets/Dashboard/icon-check-in.svg'
import CheckOut from '../../../../assets/Dashboard/icon-check-out.svg'
import { calcH, calcW } from '../../../utils/Common'
import { colorSet } from '../../../utils/Color'
import { Font } from '../../../utils/font'
import authService from '../../../api/auth'

// const CheckList=({item})=> {
//   return(
   
//   )
// }

 const Dashboard =(props)=> {
  const [data, setData] = useState([])
  useEffect(()=> {
    getMeetingList()
  }, [])

 
  const getMeetingList=async ()=> {
    await authService.MeetingList({user_id: 1})
    .then((res)=> {
      console.log("res meeting list", res.data?.data[0]);
      setData(res.data?.data)
    }).catch(err=> {
      console.log("err",err);
    })
  }


  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const options = { year: '2-digit', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
  
    const formattedDate = date.toLocaleString('en-US', options);
    
    // Split the formatted date into individual components
    const [monthDay, year, time] = formattedDate.split(',');
    const [month, day] = monthDay.split(' ');
    
    // Reformat to match "DD MMM YY hh:mm pm"
    const formattedMonthDay = `${day.trim()} ${month}`;
    const formattedYear = year.trim();
    const formattedTime = time.trim().toLowerCase();
  
    return `${formattedMonthDay} ${formattedYear} ${formattedTime}`;
  };

    return (
      <SafeView>
        <HeaderComponent icon={assetsIcon.menu} onPress={()=> props.navigation.toggleDrawer()}/>
        <View style={{padding: 8, flex: 1}}>
      <HStack  justifyContent="center">

      <Image source={assetsImages.checkins} style={styles.topImage} resizeMode='contain'/>
      <Image source={assetsImages.expensebg} style={styles.topImage} resizeMode='contain'/>

    </HStack>
    <Text style={{color: '#000', fontFamily: Font.Medium, fontSize: calcW(0.05), marginTop: calcH(-0.05), marginBottom: calcH(0.02)}}>Pending Check Out</Text>
    <View style={{justifyContent: "center", alignItems: "center"}}>
      
      <FlatList
      data={data}
      renderItem={(item, index)=>{
        return(

          <View style={{flex: 1,flexDirection: "row", borderRadius: 8, shadowColor: '#000', elevation: 2, borderWidth: 0,backgroundColor: '#fff',  marginBottom: calcH(0.02), width: calcW(0.85)}}>
          <View style={{flex: 0.7, padding: 8}}>
          <Text style ={{fontFamily: Font.Bold, color: "#000", fontSize: calcW(0.05)}}>{`${item.item.first_name} ${item.item.last_name}`}</Text>
          <View style={{flexDirection:  "row", alignItems: "center"}}>
            <CheckIn width={calcW(0.05)} height={calcH(0.05)}/>
            <Text style={{marginLeft: calcW(0.02),fontFamily: Font.Regular, fontSize: calcW(0.03)}}>Check in {formatDate(item.item.checkin_date)}</Text>
          </View>
          </View>
          <View style={{flex: 0.3,backgroundColor: "#FCB800", alignItems: 'center', justifyContent: "center"}}>
            <CheckOut width={calcW(0.08)} height={calcH(0.08)} />
            <Text style={{color: '#fff', fontFamily: Font.Regular, fontSize: calcW(0.028)}}>Check Out</Text>
          </View>
              </View>
        )
      }}
      />
    </View>
    </View>
    </SafeView>
    )
  
}
export default Dashboard
const styles = StyleSheet.create({
  topImage: {width: calcW(0.38),height: calcH(0.38)}
})
