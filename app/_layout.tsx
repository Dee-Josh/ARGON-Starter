import { AuthProvider } from "@/lib/context/AuthContext";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, } from "react";
import { Image, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { checkFirstLaunch } from "../lib/onboarding";

SplashScreen.preventAutoHideAsync();

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => { },
});




export default function RootLayout() {
  // TO LOG THE CURRENT SCREEN
  const segments = useSegments();
  const router = useRouter();
  // const { user } = useAuth();
  const user = 'joshua';

  useEffect(() => {
    console.log("Current route segments:", segments)
  }, [segments])

  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");
  // Auto-sync with system theme
  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);
  const toggleTheme = () => setIsDark((prev) => !prev);

  // FOR DELAYING SPLASHSCREEN
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, []);

  // FOR DECIDING WHERE TO START (ROUTE GUARD)
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function decideStart() {
      const firstLaunch = await checkFirstLaunch();
      console.log("Redirecting becuase firstlaunch =", firstLaunch);
      if (!isMounted) return;

      if (firstLaunch) {
        router.replace("/onboarding/onboarding1");
        // firstLaunch = 
      } else if (!user) {
        router.replace("/auth/LogIn");
      } else {
        router.replace("/(tabs)");
      }
      setChecking(false);
    }
    decideStart();
    return () => { isMounted = false}
  }, []);


  if (checking) return <Image source={require('../assets/splash.png')} style={{ resizeMode: 'cover', height: "auto" }} />; // or show splash/loading

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



// WHAT YOU WOULD DO IS THAT YOU WILL TRY TO USE ROUTE GUARD FROM PREVIOUS CODE

// THEN JUST START DESIGNING THE SCREENS IF IT DOESNT WORK, THEN WE WILL COMPILE USING DEV CLIENT TO TEST AFTER SCREENS ARE DESIGNED.