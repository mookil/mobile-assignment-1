import HeaderCard from "@/components/HomePageComponents/HeaderCard";
import { headerCardProps } from "@/lib/products";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View>
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
    margin: 10,
    gap: 10,
  },
});
