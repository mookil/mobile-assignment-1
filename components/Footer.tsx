import { Feather } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, usePathname } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const Footer = () => {
  const pathname = usePathname();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {pathname === "/" && <View style={styles.activeBar}></View>}
        <Link href={"/"}>
          <Feather name="home" size={36} color="black" />
        </Link>
      </View>

      <Link href='/ProfilePage'>
        {pathname === "/ProfilePage" && <View style={styles.activeBar}></View>}
        <View style={styles.iconContainer}>
          <Feather name="user" size={30} color="black" />
        </View>
      </Link>
      

      <View style={styles.iconContainer}>
        <Feather name="shopping-cart" size={30} color="black" />
      </View>

    <View style={styles.iconContainer}>
        <FontAwesome6
          name="bars"
          size={24}
          color="black"
          style={{ padding: 3 }}
        />
      </View>

      
      <View style={styles.iconContainer}>
        <Ionicons name="chatbubbles-outline" size={30} color="black" />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderTopColor: "gray",
    borderTopWidth: 1,
  },
  iconContainer: {
    paddingTop: 10,
    paddingHorizontal: 8,
    position: "relative",
  },
  activeBar: {
    position: "absolute",
    top: 0,
    width: 45,
    height: 4,
    backgroundColor: "black",
    borderRadius: 3,
  },
});
