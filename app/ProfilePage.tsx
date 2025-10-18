import ListsCard from '@/components/ProfilePageComponents/ListsCard';
import OrderCard from '@/components/ProfilePageComponents/OrderCard';
import ProfilePageCard from '@/components/ProfilePageComponents/ProfilePageCard';
import SmallerCard from '@/components/ProfilePageComponents/SmallerCard';
import WideCard from '@/components/ProfilePageComponents/WideCard';
import { buyAgainProps, keepShoppingProps, listsRegisteriesProps, subscribeSaveProps, yourOrdersProps } from '@/lib/products';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ProfilePage = () => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}>
      {/* User Name Header Bar section */}
      <View style={styles.profileHeader}>
        
        {/* Section 1: Profile Pic, Welcome Greeting, Dropdown Arrow */} 
        <View style={styles.profileHeaderSection1}>
          <FontAwesome5 name="user-alt" size={24} color="#cee2ea" style={styles.profilePicture}/>
          <Text style={styles.profileText}>Hello, User</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" style={styles.profileArrow} />
        </View>

        {/* Section 2: Settings, Notifications, Country*/}
        <View style={styles.profileHeaderSection2}>
          <Ionicons name="settings-outline" size={24} color="black" style={styles.pHSection2Elements} />
          <FontAwesome5 name="bell" size={24} color="black" style={styles.pHSection2Elements} />
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
            <Image source={require('../assets/images/flags/flag_CA.png')}
            style={{width: 30, height: 30}}/>
          <Text>EN</Text>
          </View>
          
        </View>
      </View>
      
      {/* Widgets Section */}
      <ScrollView
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.widgetsContainer}>
        <Text style={styles.widget}>Orders</Text>
        <Text style={styles.widget}>Buy Again</Text>
        <Text style={styles.widget}>Account</Text>
        <Text style={styles.widget}>Lists</Text>
      </ScrollView>

      {/* User Orders section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Your Orders</Text>
          <FontAwesome5 name="arrow-right" size={20} color="black" />
        </View>
        
        {/* Product Cards */}
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.cardContainer}>
          {yourOrdersProps.map((props, index) => (
            <OrderCard pageProps={props} key={index}/>
          )) }
        </ScrollView>
        
      </View>
      

      {/* User Buy Again section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Buy Again</Text>
          <FontAwesome5 name="arrow-right" size={20} color="black" />
        </View>
        
        {/* Product Cards */}
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.cardContainer}>
          {buyAgainProps.map((props, index) => (
            <ProfilePageCard pageProps={props} key={index}/>
          )) }
        </ScrollView>
      </View>

      {/* User Subscribe Section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Subscribe & Save</Text>
          <FontAwesome5 name="arrow-right" size={20} color="black" />
        </View>
        
        {/* Product Cards */}
          <View>
            {subscribeSaveProps.map((props, index) => (
            <WideCard pageProps={props} key={index}/>
          )) }
          
          </View>
      </View>

      {/* Keep shopping for items section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Keep Shopping For</Text>
          <FontAwesome5 name="arrow-right" size={20} color="black" />
        </View>
        
        {/* Product Cards */}
        <View style={styles.overflowCardContainer}>
          {keepShoppingProps.map((props, index) => (
            <SmallerCard pageProps={props} key={index}/>
          )) }

          {/* See more and Edit section */}
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          paddingTop: 0,
          
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5
          }}>
            <SimpleLineIcons name="arrow-down" size={11} color="#3c76ab" />
            <Text style={{
              color: '#3c76ab'}}>See More</Text>
          </View>
          <Text style={{color: '#3c76ab'}}>Edit</Text>
        </View>
      </View>

      {/* Lists + Registeries section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>List and Registeries</Text>
          <FontAwesome5 name="arrow-right" size={20} color="black" />
        </View>
        
        {/* Product Cards */}
        <View>
            {listsRegisteriesProps.map((props, index) => (
            <ListsCard pageProps={props} key={index}/>
          )) }
          
          </View>
      </View>

      {/* Account settings section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Your Accounts</Text>
          <FontAwesome5 name="arrow-right" size={20} color="black" />
        </View>

        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
         style={styles.widgetsContainer}>
            <Text style={styles.widget}>Your Orders</Text>
            <Text style={styles.widget}>Your Payments</Text>
            <Text style={styles.widget}>Your Subscribe & Save</Text>
          </ScrollView>
      </View>

      <View style={{paddingTop: 20}}></View>

      {/* Gift Card section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Gift Card Balance: $0.00</Text>
          <FontAwesome5 name="arrow-right" size={20} color="black" />
        </View>

        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
         style={styles.widgetsContainer}>
            <Text style={styles.widget}>Your Orders</Text>
            <Text style={styles.widget}>Your Payments</Text>
          </ScrollView>
      </View>

      <View style={{paddingTop: 200}}></View>
    </ScrollView>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
    profileHeader: {
      flexDirection: 'row',
      padding: 10,
      paddingTop: 15,
      paddingBottom: 15,
      justifyContent: 'space-between',
    },
    profileHeaderSection1: {
      flexDirection: 'row',
      width: '50%',
    },
    profileHeaderSection2: {
      flexDirection: 'row',
      width: '15%',
      gap: 15,
      marginRight: 50,
      justifyContent: 'space-between',
    },
    profilePicture: {
      borderRadius: 20,
      backgroundColor: '#1878a2',
      marginRight: 5,
      padding: 5,
      borderWidth: 2,
      borderColor: '#a9b7b7',
    },
    profileText: {
      marginTop: 8,

    },
    profileArrow: {
      marginTop:8,

    },
    pHSection2Elements: {
      marginRight: 'auto',
      width: '30%',
    },
    headerSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 15,
      marginRight: 15,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 23,
    }, 
    cardContainer: {
      flexDirection: 'row',
      width: '100%',
    },
    overflowCardContainer: {
      flexDirection:'row',
      width: '100%',
      flexWrap: 'wrap',

    },
    widgetsContainer: {
      flexDirection: 'row',
      padding: 15,
      gap: 5,
    },
    widget: {
      borderWidth: 2,
      borderRadius: 15,
      minWidth: 110,
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,
      borderColor: '#a9b7b7',
      marginRight: 5,
      textAlign: 'center',

    }

})