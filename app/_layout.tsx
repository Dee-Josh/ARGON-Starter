import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "@/lib/context/AuthContext";
import { useEffect } from "react";
import { HeaderShownContext } from "@react-navigation/elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";


function RouteGuard({children}: {children: React.ReactNode}){
  const router = useRouter();
  const {user, isLoadingUser} = useAuth();
  const segments = useSegments();


  useEffect(()=>{
    const inAuthGroup = segments[0] === "login";
    if(!user && !inAuthGroup && !isLoadingUser){
      router.replace("/login");
    }else if(user && inAuthGroup && !isLoadingUser){
      router.replace("/");
    } 
  }), [user, segments];
  

  return <>{children}</>
} // - find the alternative for this in JS

const isAuth = true;



export default function RootLayout() {

  // const [isAuth, setIsAuth] = useState(false);
  // Use code from chatgpt to update the splashscreen and the authentication screen display logic

  return(
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <SafeAreaProvider>
          {/* <RouteGuard> */}
          <Stack screenOptions={{headerShown: false}}>
            {/* <Stack.Screen  name={!isAuth ? "login" : "(tabs)" } options={{headerShown: false}} /> */}
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
          </Stack>
          {/* </RouteGuard> */}
        </SafeAreaProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  )
}
