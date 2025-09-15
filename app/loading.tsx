// app/loading.tsx → your loading screen:

import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login"); // Or "/" or any route you want
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>Loading resources...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});
