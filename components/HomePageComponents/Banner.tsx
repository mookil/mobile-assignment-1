import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Banner = ({ props }: { props: any }) => {
  const { backgroundColor, title, subtitle, buttonText, imageSource } = props;

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {buttonText && <Text style={styles.button}>{buttonText}</Text>}
      </View>
      {imageSource && (
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 8,
  },
  button: {
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline",
  },
  imageContainer: {
    width: 120,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
