
import { Stack, useRouter, useSegments } from "expo-router";


export default function OnboardingLayout() {
  return(
    // <Stack screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="onboarding1" options={{headerShown: false}} />
    //   <Stack.Screen name="onboarding2" options={{headerShown: false}} />
    //   <Stack.Screen name="onboarding3" options={{headerShown: false}} />
    // </Stack>

    <Stack.Screen options={{headerShown: false}} />
  )
}
