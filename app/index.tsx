import HeaderCard from "@/components/HomePageComponents/HeaderCard";
import { headerCardProps } from "@/lib/products";
import { user } from "@/lib/user";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
    <View>
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.headerCardContainer}
      >
        {headerCardProps.map((props, index) => (
          <HeaderCard headerProps={props} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerCardContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    gap: 10,
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
});
