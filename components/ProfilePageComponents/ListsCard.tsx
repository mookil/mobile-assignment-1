import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ListsCard = ({pageProps} : {pageProps: any}) => {
    const {title, subHeader, images} = pageProps;

  return (
    <View style={styles.container}>
        {/* An Image Container */}
        <View style={styles.imageContainer}>
            {/* Text header for card */}
            <View style={styles.headerContainer}>
                <Text style={styles.containerHeader} >{title}</Text>
                <Text style={styles.containerSubHeader} >{subHeader}</Text>
            </View>
            
            <View style={styles.multipleImageContainer}>
                            {images.map((picture: string, index: number) => (
                                <Image source={{uri: picture}} key={index}
                                style={styles.image}/>
                            ))}
                        </View>  
        </View>
        <View style={styles.dotsContainer}>
            <Octicons name="dot-fill" size={24} color="#1878a2" />
            <Octicons name="dot" size={24} color="lightgray" />
            <Octicons name="dot" size={24} color="lightgray" />
            <Octicons name="dot" size={24} color="lightgray" />
        </View>
        
    </View>
    
  )
}

export default ListsCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 'auto',
        width: 'auto',
        paddingBottom: 50,
        margin: 10,
        alignItems: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        paddingTop: 20,
        borderWidth: 2,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: 'lightgray',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    image: {
        flex: 1,
        height: 100,
        width: 100,
        maxWidth: '30%',
        maxHeight: '70%',
        margin: 10,
        borderRadius: 10,

    },
    containerHeader: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#57585b'
    },
    containerSubHeader: {
        marginLeft: 10,
        color: '#57585b',
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignSelf: 'center',
        flex: 3,
    },
    dotsContainer: {
        flexDirection: 'row'
    },
    multipleImageContainer: {
        flexDirection: 'row',
        flex: 1,
        minWidth: '60%',
        justifyContent: 'flex-end'
    }
})