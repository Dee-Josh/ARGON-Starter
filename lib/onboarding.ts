import AsyncStorage from "@react-native-async-storage/async-storage";

const ONBOARDING_KEY = "onboardingComplete";

export async function checkFirstLaunch() {
  const value = await AsyncStorage.getItem(ONBOARDING_KEY);
  return value === null;
}

export async function markOnboardingComplete() {
  await AsyncStorage.setItem(ONBOARDING_KEY, "true");
}
