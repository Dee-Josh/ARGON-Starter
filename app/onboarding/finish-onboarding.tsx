import { View, Text, Button } from "react-native";
import { markOnboardingComplete } from "../../lib/onboarding";
import { useRouter } from "expo-router";

export default function FinishOnboarding() {
  const router = useRouter();

  const handleFinish = async () => {
    await markOnboardingComplete();
    router.replace("/auth/LogIn");
  };
}