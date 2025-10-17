import ProfilePageCard from '@/components/ProfilePageComponents/ProfilePageCard';
import { buyAgainProps, keepShoppingProps, listsRegisteriesProps, subscribeSaveProps, yourOrdersProps } from '@/lib/products';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

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
          <Text>EN</Text>
        </View>
      </View>
      
      {/* Widgets Section */}
      <View>

      </View>

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
            <ProfilePageCard pageProps={props} key={index}/>
          )) }
          {yourOrdersProps.map((props, index) => (
            <ProfilePageCard pageProps={props} key={index}/>
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
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.cardContainer}>
          {subscribeSaveProps.map((props, index) => (
            <ProfilePageCard pageProps={props} key={index}/>
          )) }
        </ScrollView>
      </View>

      {/* Keep shopping for items section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Keep Shopping For</Text>
          <FontAwesome5 name="arrow-right" size={20} color="black" />
        </View>
        
        {/* Product Cards */}
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.cardContainer}>
          {keepShoppingProps.map((props, index) => (
            <ProfilePageCard pageProps={props} key={index}/>
          )) }
        </ScrollView>
      </View>

      {/* Lists + Registeries section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>List and Registeries</Text>
          <FontAwesome5 name="arrow-right" size={20} color="black" />
        </View>
        
        {/* Product Cards */}
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.cardContainer}>
          {listsRegisteriesProps.map((props, index) => (
            <ProfilePageCard pageProps={props} key={index}/>
          )) }
        </ScrollView>
      </View>

      {/* Account settings section */}
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Your Accounts</Text>
        </View>
        
      </View>
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
      marginRight: 20,
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
      fontSize: 20,
    }, 
    cardContainer: {
      flexDirection: 'row',
      width: '100%',
    }

})