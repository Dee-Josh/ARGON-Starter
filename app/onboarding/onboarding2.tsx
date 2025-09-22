import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function OnboardingScreen2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Unlock Your Full Potentials</Text>
      <Image source={require('@/assets/onboard2Card.png')} style={{height: "70%", resizeMode: 'contain'}}/>
      <Button mode="contained" style={styles.button} onPress={() => router.replace("/onboarding/finish-onboarding")}><Text style={styles.buttonText}>Continue</Text></Button>
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
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 30,
  },
  mainText: {
    fontFamily: 'Montserrat Bold',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 10,
  },
  onboardCard: {

  },
  button: {
    backgroundColor: colors.green,
    width: '100%',
    marginTop: 30,
    paddingVertical: 4,
    borderRadius: 100
  },
  buttonText: {
    color: colors.white,
    fontSize: 22,
  },
})


// font - montserrat Bold - unlocking your full potentials
// font - argon - modern-grotesk - ARGON text in logo
// font - open sans - Raising Balanced Giants
// font - san seriff / roboto/ inter - get started
