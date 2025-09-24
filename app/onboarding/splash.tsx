import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function OnboardingScreen1() {
  const router = useRouter();
  console.log('Splash mounted');

  setTimeout(() => {
    router.replace('/onboarding/onboarding1');
  }, 5000);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/splash.png")} style={styles.splash} />
    </View>
  );
}

const colors = {
  green: '#58B65A',
  darkBlue: '#1B242D',
  white: '#FFF',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  splash: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
  },
  
})