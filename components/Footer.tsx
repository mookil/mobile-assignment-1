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
      <Link
        href={"/"}
        style={
          pathname === "/"
            ? { ...styles.icon, borderTopWidth: 4, borderColor: "black" }
            : { ...styles.icon }
        }
      >
        <Feather name="home" size={24} color="black" />
      </Link>
      {/* <Link href={'/user'} style={pathname === '/user' ? {...styles.icon, borderTopWidth: 4, borderColor: 'black'} : {...styles.icon}}>  */}
      <Feather
        name="user"
        size={24}
        color="black"
        style={
          pathname === "/user"
            ? { ...styles.icon, borderTopWidth: 4, borderColor: "black" }
            : { ...styles.icon }
        }
      />
      {/* </Link> */}
      <Feather
        name="shopping-cart"
        size={24}
        color="black"
        style={styles.icon}
      />
      <FontAwesome6 name="bars" size={19} color="black" style={styles.icon} />
      <Ionicons
        name="chatbubbles-outline"
        size={24}
        color="black"
        style={styles.icon}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderTopColor: "gray",
    borderTopWidth: 1,
  },
  icon: {
    paddingTop: 10,
    paddingHorizontal: 8,
  },
});
