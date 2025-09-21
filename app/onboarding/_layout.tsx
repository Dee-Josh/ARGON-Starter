import { AuthProvider, useAuth } from "@/lib/context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function AuthLayout() {
  return(
    <Stack screenOptions={{headerShown: false}}>
      {/* <Stack.Screen  name={!isAuth ? "login" : "(tabs)" } options={{headerShown: false}} /> */}
      {/* <Stack.Screen name="(tabs)" options={{headerShown: false}} /> */}
      <Stack.Screen name="streaks" options={{headerShown: false}} />
    </Stack>
  )
}
