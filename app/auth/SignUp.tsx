import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SignUp() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>FORGOT PASSWORD</Text>
      <Button title="Next" />
    </View>
  );
}