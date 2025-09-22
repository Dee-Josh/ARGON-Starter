
import { Stack, useRouter, useSegments } from "expo-router";


export default function OnboardingLayout() {
  return(
    <Stack screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="onboarding1" options={{headerShown: false}} />
      <Stack.Screen name="onboarding2" options={{headerShown: false}} />
      <Stack.Screen name="finish-onboarding" options={{headerShown: false}} />
    </Stack>

    // <Stack.Screen options={{headerShown: false}} />
  )
}
