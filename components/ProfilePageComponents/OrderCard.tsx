import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const OrderCard = ({pageProps} : {pageProps: any}) => {
    const {title, images} = pageProps;

    let titleExists = false;

    if (title !== '') {
        titleExists = true;
    }

  return (
    <View style={styles.container}>
        {/* An Image Container */}
        <View style={styles.imageContainer}>
            {/* Text header for card */}
            <View style={styles.headerContainer}>
                <Text style={styles.containerHeader} >{title}</Text>
                {/* ternary to hide the arrow if title doesn't exist */}
                {titleExists ? 
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" /> : 
                <Text></Text> }
                
            </View>
            
            <Image source={{uri: images[0]}} 
            style={styles.image} />
        </View>
    </View>
    
  )
}

export default OrderCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 'auto',
        width: 'auto',
        paddingBottom: 50,
    },
    imageContainer: {
        flexDirection: 'column',
        flex: 1,
        margin: 10,
        paddingTop: 20,
        borderWidth: 2,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: 'lightgray',
        flexWrap: 'wrap',
    },
    image: {
        flex: 1,
        height: 150,
        width: 200,
        margin: 10,
        borderRadius: 10,

    },
    containerHeader: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})