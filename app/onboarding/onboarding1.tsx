import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function OnboardingScreen1() {
  const router = useRouter();
  console.log('Onboarding1 mounted');


  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/gradient-bg.png')} resizeMode="cover" style={styles.imageBgc}>
        <Image source={require("@/assets/argon-logo.png")} style={styles.argonLogo} />
        <Text style={styles.argonText}>ARGON</Text>
        {/* <Text style={styles.description}>All-Round Giants Outstanding Network</Text> */}
        <Text style={styles.sloganText}>Raising Balanced Giants</Text>

        <Button mode="contained" style={styles.button} onPress={() => router.replace("/onboarding/onboarding2")}><Text style={styles.buttonText}>Get Started</Text></Button>
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
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  imageBgc: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  argonLogo: {
    height: 300,
    width: 280,
    resizeMode: 'contain',
    marginRight: 1
  },
  argonText: {
    color: colors.darkBlue,
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 30,
    marginBottom: -10,
  },
  description: {
    fontWeight: 'bold',
  },
  sloganText: {
    color: colors.darkBlue,
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.green,
    width: '80%',
    marginTop: 190,
    paddingVertical: 8,
    borderRadius: 100
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
})