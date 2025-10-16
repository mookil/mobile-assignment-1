import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const ProfilePageCard = () => {
  return (
    <View>
        <View style={styles.container}>
            {/* An Image Container */}
            <View style={styles.imageContainer}>
                <Image source={{uri: 'https://picsum.photos/300'}} 
                style={styles.image} />
                <Image source={{uri: 'https://picsum.photos/100'}} 
                style={styles.image} />
                <Image source={{uri: 'https://picsum.photos/200'}} 
                style={styles.image} />
                <Image source={{uri: 'https://picsum.photos/500'}} 
                style={styles.image} />
            </View>

            {/* An Image Container */}
            <View style={styles.imageContainer}>
                <Image source={{uri: 'https://picsum.photos/200'}} 
                style={styles.image} />
                <Image source={{uri: 'https://picsum.photos/500'}} 
                style={styles.image} />
                <Image source={{uri: 'https://picsum.photos/200'}} 
                style={styles.image} />
                <Image source={{uri: 'https://picsum.photos/500'}} 
                style={styles.image} />
            </View>
        </View>
    </View>
    
  )
}

export default ProfilePageCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '100%',
        width: '90%',
        paddingBottom: 50,
    },
    imageContainer: {
        flexDirection: 'row',
        margin: 10,
        paddingTop: 20,
        height: '100%',
        width: '50%',
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 10,
        flexWrap: 'wrap',
    },
    image: {
        flex: 1,
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 10,

    }
})