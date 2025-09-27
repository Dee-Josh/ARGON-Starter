import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <ImageBackground source={require('@/assets/gradient-bg.png')}>
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>FORGOT PASSWORD</Text>
        <Button title="Next" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#f5f5f5',
    padding: 15,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    // backgroundColor: 'green',
    // height: 20,
  },

})