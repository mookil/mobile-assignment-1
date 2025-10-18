import HeaderCard from "@/components/HomePageComponents/HeaderCard";
import {
  bannerProps, dealProps,
  headerCardProps,
  sponsoredProps,
  subHeaderCardProps
} from "@/lib/products";
import { user } from "@/lib/user";

import SubHeaderCard from "@/components/HomePageComponents/SubHeaderCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import Banner from "@/components/HomePageComponents/Banner";
import DealCard from "@/components/HomePageComponents/DealCard";



export default function Index() {
  const { postalCode } = user;
  const categories = [
    "All products",
    "Accessories & Station",
    "Aftercare & Liquids",
    "Blades & Cartridges",
    "Clippers & Trimmers",
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Category */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
        <View style={styles.address}>
          <EvilIcons name="location" size={22} color="black" />
          <Text style={styles.categoryText}>{postalCode}</Text>
          <AntDesign
            name="down"
            size={8}
            color="black"
            style={{ paddingHorizontal: 5 }}
          />
        </View>
        {categories.map((category) => (
          <View key={category} style={styles.category}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Header Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.headerCardContainer}
      >
        {headerCardProps.map((props, index) => (
          <HeaderCard headerProps={props} key={index} />
        ))}
      </ScrollView>

      {/* SubHeader Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.headerCardContainer}
      >
        {subHeaderCardProps.map((props, index) => (
          <SubHeaderCard props={props} key={index} />
        ))}
      </ScrollView>

      {/* Sponsored  */}
      <View style={styles.sponsoredContainer}>
        <Image
          source={{ uri: sponsoredProps.image }}
          style={styles.sponsoredImage}
        />
        <Text style={styles.sponsoredTitle}>{sponsoredProps.title}</Text>
      </View>

      {/* Banners */}
      <View style={styles.bannerContainer}>
        {bannerProps.map((props, index) => (
          <Banner props={props} key={index} />
        ))}
      </View>

      {/* Deals Section */}
      <ScrollView style={styles.dealsSection}>
        <Text style={styles.sectionTitle}>Deals of the Day</Text>
        <View style={styles.dealsGrid}>
          {dealProps.map((props, index) => (
            <DealCard props={props} key={index} />
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headerCardContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    gap: 10,
    marginBottom: 10,
  },
  categoryContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  address: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderRadius: 100,
    paddingVertical: 10,
    backgroundColor: "#def1ff",
  },
  category: {
    backgroundColor: "#def1ff",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 100,
  },
  categoryText: {
    fontWeight: "500",
    fontSize: 18,
    textDecorationColor: "#0f1110",
  },
  sponsoredContainer: {
    borderRadius: 10,
    height: 100,
    overflow: "hidden",
    position: "relative",
  },
  sponsoredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  sponsoredTitle: {
    position: "absolute",
    right: 30,
    top: 30,
    fontSize: 20,
    color: "white",
    width: 180,
    textAlign: "right",
    fontWeight: "bold",
  },
  bannerContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  dealsSection: {
    padding: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0f1110",
  },
  dealsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  dealsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dealCard: {
    width: "48%",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
  },
  dealImage: {
    width: "50%",
    height: 220,
    borderRadius: 8,
    marginBottom: 8,
  },
  dealLabel: {
    color: "#CC0C39",
    fontWeight: "600",
    fontSize: 14,
  },
  discountBadge: {
    backgroundColor: "#CC0C39",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  discountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
