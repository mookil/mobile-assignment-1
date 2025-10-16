import ProfilePageCard from '@/components/ProfilePageComponents/ProfilePageCard'
import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

const ProfilePage = () => {
  return (
    <ScrollView>
      <Text>Hello, User</Text>
      <Text>Your Orders</Text>
      <ProfilePageCard/>

      <Text>Buy Again</Text>
      <ProfilePageCard/>

      <Text>Subscribe & Save</Text>
      <ProfilePageCard/>

      <Text>Keep Shopping For</Text>
      <ProfilePageCard/>

      <Text>List and Registeries</Text>

      <Text>Your Account</Text>
    </ScrollView>
  )
}

export default ProfilePage

const styles = StyleSheet.create({

})