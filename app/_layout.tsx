import { AuthProvider, useAuth } from "@/lib/context/AuthContext";
import { Stack, useRouter, useSegments, Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState, } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { checkFirstLaunch } from "../lib/onboarding";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

SplashScreen.preventAutoHideAsync();

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => { },
});




export default function RootLayout() {

  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");
  // Auto-sync with system theme
  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const toggleTheme = () => setIsDark((prev) => !prev);


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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeContext.Provider value={{ isDark, toggleTheme }} >
          <AuthProvider>
            <StatusBar style={isDark ? "light" : "dark"} />
            <Slot />
          </AuthProvider>
        </ThemeContext.Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
