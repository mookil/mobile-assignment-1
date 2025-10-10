import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchBar from './Searchbar'

const Header = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.7)', // white at 70% opacity
    }
})