import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { ImageBackground } from "expo-image";

export default function OnboardingScreen2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBg} source={require('@/assets/gradient-bg.png')}>
        <Image source={require('@/assets/argon-logo.png')} style={{ width: 65, height: 75, resizeMode: 'contain', alignSelf: 'flex-start', }} />
        <Image source={require('@/assets/onboard2.png')} style={styles.onboardCard} />
        <Pressable style={styles.button} onPress={() => { router.push('/onboarding/onboarding3') }}><Text style={styles.buttonText}>Continue</Text></Pressable>
      </ImageBackground>
    </View>
  );
}

const colors = {
  green: '#58B65A',
  darkBlue: '#1B242D',
  white: '#FFF',
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: 'Montserrat Bold',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 10,
  },
  onboardCard: { width: 310, 
    height: 339, 
    resizeMode: 'contain', 
    marginTop: 150, 
    borderRadius: 20, 
    borderWidth: 1 
  },
  button: {
    marginTop: 90,
    backgroundColor: colors.green,
    paddingVertical: 12,
    borderRadius: 100,
    alignItems: 'center',
    width: "100%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    
  },
})


// font - montserrat Bold - unlocking your full potentials
// font - argon - modern-grotesk - ARGON text in logo
// font - open sans - Raising Balanced Giants
// font - san seriff / roboto/ inter - get started
