import { AuthProvider, useAuth } from "@/lib/context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();


function RouteGuard({children}: {children: React.ReactNode}){
  const router = useRouter();
  const {user, isLoadingUser} = useAuth();
  const segments = useSegments();


  // useEffect(()=>{
  //   const inAuthGroup = segments[0] === "login";
  //   if(!user && !inAuthGroup && !isLoadingUser){
  //     router.replace("/login");
  //   }else if(user && inAuthGroup && !isLoadingUser){
  //     // router.replace("/");
  //   } 
  // }), [user, segments];
  

  return <>{children}</>
} // - find the alternative for this in JS

const isAuth = true;



export default function RootLayout() {
  // Use code from chatgpt to update the splashscreen and the authentication screen display logic --- not the one below
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000); 
  }, []);

  return(
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <SafeAreaProvider>
          <Stack screenOptions={{headerShown: false}}>
            {/* <Stack.Screen  name={!isAuth ? "login" : "(tabs)" } options={{headerShown: false}} /> */}
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
            {/* <Stack.Screen name="(onboarding)" options={{headerShown: false}} /> */}
          </Stack>
        </SafeAreaProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  )
}
