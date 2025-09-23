
import { Stack } from "expo-router";


export default function AuthLayout() {
  return(
    <Stack screenOptions={{headerShown: false, animation: "flip"}}>
      <Stack.Screen name="LogIn" options={{headerShown: false}} />
      <Stack.Screen name="SignUp" options={{headerShown: false}} />
      <Stack.Screen name="ForgotPassword" options={{headerShown: false}} />
    </Stack>
  )
}
