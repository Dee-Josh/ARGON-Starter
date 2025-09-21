import { View, Text, Button } from "react-native";
import { markOnboardingComplete } from "../../lib/onboarding";
import { useRouter } from "expo-router";

export default function FinishOnboarding() {
  const router = useRouter();

  const handleFinish = async () => {
    await markOnboardingComplete();
    router.replace("/auth/LogIn");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>You're all set!</Text>
      <Button title="Get Started" onPress={handleFinish} />
    </View>
  );
}
