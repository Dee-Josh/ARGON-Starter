import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function OnboardingScreen1() {
  const router = useRouter();
  console.log('Onboarding1 mounted');
  

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'green' }}>
      <Text style={{ fontSize: 24, color: 'black' }}>Welcome to ARGON!</Text>
      <Button title="Next" onPress={() => router.push("/onboarding/onboarding2")} />
    </View>
  );
}