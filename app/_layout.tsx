import AlertButton from "@/components/AlertButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Header />

      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }} />
        <AlertButton />
      </View>

      {/* Footer inside its own SafeAreaView for bottom padding */}
      <SafeAreaView edges={["bottom"]} style={styles.footerSafe}>
        <Footer />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
  },
  footerSafe: {
    backgroundColor: "white", // to avoid transparency gaps
  },
});
