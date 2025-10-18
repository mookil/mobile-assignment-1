import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const SmallerCard = ({pageProps} : {pageProps: any}) => {
    const {title, subHeader, images} = pageProps;

  return (
    <View style={styles.container}>
        {/* An Image Container */}
        <View style={styles.imageContainer}>
            <Image source={{uri: images[0]}} 
            style={styles.image} />

            
        </View>
        {/* Text header for card */}
            <View style={styles.headerContainer}>
                <Text style={styles.containerHeader} >{title}</Text>
            </View>
            {/* sub header for card */}
            <View style={styles.headerContainer}>
                <Text style={styles.containerSubHeader} >{subHeader}</Text>
            </View>
        
    </View>
    
  )
}

export default SmallerCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 'auto',
        width: 'auto',
        alignContent: 'center',
    },
    imageContainer: {
        flexDirection: 'column',
        flex: 1,
        margin: 10,
        padding: 10,
        borderWidth: 2,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: 'lightgray',
        flexWrap: 'wrap',
    },
    image: {
        flex: 1,
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 10,

    },
    containerHeader: {
        marginLeft: 10,
        paddingBottom: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerSubHeader: {
        marginLeft: 10,
        paddingBottom: 5,
        color: '#57585b',
    }
})