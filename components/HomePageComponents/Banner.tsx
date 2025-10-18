import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Banner = ({ props }: { props: any }) => {
  const { backgroundColor, title, subtitle, buttonText, imageSource } = props;

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <View style={styles.contentWrapper}>
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
      </View>
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    marginHorizontal: 0,
    borderRadius: 0,
    overflow: "hidden",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 16,
    minHeight: 100,
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "white",
    marginTop: 2,
  },
  button: {
    fontSize: 13,
    color: "white",
    textDecorationLine: "underline",
    marginTop: 2,
  },
  imageContainer: {
    width: 80,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
