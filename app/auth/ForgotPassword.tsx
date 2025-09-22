import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>FORGOT PASSWORD</Text>
      <Button title="Next" />
    </View>
  );
}