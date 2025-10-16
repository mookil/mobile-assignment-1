import Foundation from '@expo/vector-icons/Foundation';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SubHeaderCard = ({ props }: { props: any }) => {
  const { title, image, isSponsored } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {isSponsored && (
        <View style={styles.sponsored}>
            <Text>Sponsored <Foundation name="info" size={20} color="gray"/></Text>
        </View>
        )}
      
      <Image source={{uri:image}} style={styles.image} />
    </View>
  );
};

export default SubHeaderCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: 'gray',
    padding: 9,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
    borderRadius: 12,
    marginBottom: 5,
  },
  sponsored: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  }
});
