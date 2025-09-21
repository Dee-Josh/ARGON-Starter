import { AuthProvider, useAuth } from "@/lib/context/AuthContext";
import { Stack, useRouter, useSegments, Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { checkFirstLaunch } from "../lib/onboarding";

SplashScreen.preventAutoHideAsync();




export default function RootLayout() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const { user } = useAuth();

  
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 5000); 

    async function decideStart() {
      const firstLaunch = await checkFirstLaunch();

      if (firstLaunch) {
        router.replace("/onboarding/onboarding1");
      } else if (!user) {
        router.replace("/auth/LogIn");
      } else {
        router.replace("/(tabs)");
      }

      setChecking(false);
    }

    decideStart();

  }, []);

  if (checking) return null; // or show splash/loading

  return(
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <SafeAreaProvider>
          <Stack screenOptions={{headerShown: false}}>
            {/* <Stack.Screen  name={!isAuth ? "login" : "(tabs)" } options={{headerShown: false}} /> */}
            <Stack.Screen name="auth" options={{headerShown: false}} />
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
          </Stack>
        </SafeAreaProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  )
}
