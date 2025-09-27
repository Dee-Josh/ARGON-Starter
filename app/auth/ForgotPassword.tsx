import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>FORGOT PASSWORD</Text>
      <Button title="Next" />
    </View>
  );
}

const styles = StyleSheet.create({
  imgBg: {

  },
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    
  },

})