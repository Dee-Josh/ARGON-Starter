import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function OnboardingScreen2() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Welcome to ARGON!</Text>
      <Button title="Next" onPress={() => router.push("/onboarding/finish-onboarding")} />
    </View>
  );
}