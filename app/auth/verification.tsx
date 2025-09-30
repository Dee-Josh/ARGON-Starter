import React from "react";
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Verification() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/argon-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
     <TextInput
        placeholder="code"
        keyboardType="numeric"
      />
      <Pressable>
        <Text>Verify</Text>        
      </Pressable>
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
