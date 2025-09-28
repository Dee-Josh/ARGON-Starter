import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Logo (replace source with your logo asset) */}
      <Image
        source={require("../assets/argon-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Brand name */}
      <Text style={styles.brand}>ARGON</Text>

      {/* Tagline */}
      <Text style={styles.tagline}>All Round Giants Outstanding Network</Text>

      {/* Loading Spinner */}
      <ActivityIndicator size="large" color="#0066cc" style={{ marginTop: 30 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  brand: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0066cc",
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
