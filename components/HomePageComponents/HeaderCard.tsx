import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HeaderCard = ({ headerProps }: { headerProps: any }) => {
  const { title, backgroundImage,subtitle, images } = headerProps;

  const [card, setCard] = useState("firstCard");
  useEffect(() => {
    if (images) {
      if (images?.length === 4) setCard("secondCard");
      if (images?.length === 3) setCard("thirdCard");
    }
  }, []);
  return (
    <>
      {card === "firstCard" && (
        <View style={styles.container1}>
          <Image
            source={{
              uri: backgroundImage,
            }}
            style={styles.backGroundImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        </View>
      )}

      {card === "secondCard" && (
        <View style={styles.container2}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>

          <View style={styles.imagesContainer}>
            {images.map((image: string, index: number) => (
              <Image key={index} source={{ uri: image }} style={styles.image} />
            ))}
          </View>
        </View>
      )}

      {card === "thirdCard" && (
        <View style={styles.container3}>
          <Text style={styles.title2}>{title}</Text>

          <View style={styles.imagesContainer}>
            <Image source={{ uri: images[0] }} style={styles.bigImage} />
            <Image source={{ uri: images[1] }} style={styles.smallImage} />
            <Image source={{ uri: images[2] }} style={styles.smallImage} />
          </View>
        </View>
      )}
    </>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  container1: {
    width: 250,
    height: 400,
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
  },
  container2: {
    width: 250,
    height: 400,
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#8cd0ff",
  },
  container3: {
    width: 250,
    height: 400,
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f5e0cb",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 15,
  },
  backGroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    width: "100%",
    height: 300,
    marginBottom: 2,
  },
  image: {
    width: "47%",
    height: "49%",
    borderRadius: 4,
  },
  title2: {
    fontWeight: "bold",
    fontSize: 30,
  },
  bigImage: {
    width: "99%",
    height: "49%",
    borderRadius: 4,
  },
  smallImage: {
    width: "47%",
    height: "49%",
    borderRadius: 4,
  },
});
