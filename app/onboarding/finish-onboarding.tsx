import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { ImageBackground } from "expo-image";

export default function FinishOnboarding() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBg} source={require('@/assets/gradient-bg.png')}>
        <Image source={require('@/assets/argon-logo.png')} style={{ width: 65, height: 75, resizeMode: 'contain', alignSelf: 'flex-start', }} />
        <View style={{borderWidth: 1, marginTop: 10, borderRadius: 10, overflow: 'hidden', borderColor: '#999', }}>
          <Image source={require('@/assets/finishOnboard-1.png')} style={styles.onboardCard1} />
          <Image source={require('@/assets/finishOnboard-2.png')} style={styles.onboardCard2} />
        </View>
        <Text style={styles.bigText}><Text style={{color: colors.green}}>Your Giant</Text> Plan</Text>
        <Text style={styles.description}>Define your vision and spheres, and we will draft a daily plan for a balanced and fulfiling life.</Text>
        <Pressable style={styles.button} onPress={() => { router.push('/auth/LogIn') }}><Text style={styles.buttonText}>Continue</Text></Pressable>
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
    paddingHorizontal: 20,
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
  onboardCard1: {
    width: 320,
    height: 169,
    resizeMode: 'contain',
    
    // borderWidth: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  onboardCard2: {
    width: 320,
    height: 232,
    resizeMode: 'contain',
    marginTop: -1,
    // borderWidth: 1,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 27.5,
    marginTop: 15,
    // borderWidth: 1,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 18,
    marginTop: 0,
    color: '#5e5a5aff',
  },
  button: {
    marginTop: 49,
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
