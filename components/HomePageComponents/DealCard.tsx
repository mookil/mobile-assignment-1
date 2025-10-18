import React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DealCard = ({ props }: { props: any }) => {
  const { imageSource, discount, title } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.labelContainer}>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discount}</Text>
        </View>
        <Text style={styles.dealLabel}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  discountBadge: {
    backgroundColor: "#CC0C39",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: Platform.OS ==='android' ? 8 : 5,
  },
  discountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  dealLabel: {
    color: "#CC0C39",
    fontWeight: "600",
    fontSize: 14,
  },
});
