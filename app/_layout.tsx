import Header from "@/components/Header";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <Header />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
