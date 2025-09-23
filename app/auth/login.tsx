import { useAuth } from "@/lib/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View, ImageBackground, Image } from 'react-native';
import { Button, Provider as PaperProvider, Text, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';


// LOGIN AND SIGN UP SCREEN
export default function LogIn() {

    const colors = {
        green: '#58B65A',
        darkBlue: '#1B242D',
        white: '#FFF',
    }


    function showToast(type: string, error: string) {
        Toast.show({
            type: type,
            text1: error,
            position: "top",
            topOffset: 50,
        })
    }

    const theme = {
        colors: {
            primary: '#009688',
            outline: '#999999',
        }
    }

    const [isSignUp, setIsSignUp] = useState(false);
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [error, setError] = useState("");
    const [tempErrDisplay, setTempErrDisplay] = useState("");


    const { signIn, signUp } = useAuth();

    async function handleAuth() {
        if (email === "" || password === "") {
            // setError("Please fill all fields."); 
            showToast("error", "Please fill all fields.");
            setTempErrDisplay("Please fill all fields.");
            return;
        } else if (password.length < 8) {
            // setError("Password cannot be less than 8.");
            showToast("error", "Password cannot be less than 8.");
            setTempErrDisplay("Password cannot be less than 8.");
            return;
        } else {
            setError("")
        }

        // isSignedUp ? signIn() : signUp();

        if (isSignUp) {
            // showToast("error", "creating account");
            const error = await signUp(email, password);
            if (error) {
                // setError(error);
                showToast("error", error);
                setTempErrDisplay(error);
                return
            }
            router.replace("/(tabs)")
        } else {
            const error = await signIn(email, password);
            if (error) {
                setError(error);
                showToast("error", error);
                setTempErrDisplay(error);
                return
            }

            router.replace("/")
        }

    }


    return (
        <PaperProvider>
            <ImageBackground source={require('@/assets/gradient-bg.png')} resizeMode="cover" style={styles.imageBackground}>
                <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <Toast />
                    <View>
                        <Image source={require('@/assets/argon-logo.png')} style={styles.argonLogo} />
                        <Text style={styles.welcomeText} variant="headlineMedium">
                            {isSignUp ? "Create Your Account" : "Welcome Back!"}
                        </Text>
                        <TextInput
                            // label="Name"
                            placeholder="John Doe"
                            keyboardType="default"
                            mode="outlined"
                            autoCapitalize="none"
                            style={styles.input}
                            theme={{
                                colors: {
                                    primary: colors.green,
                                    outline: '#999999',
                                }
                            }}
                            onChangeText={updateEmail}
                        />
                        <TextInput
                            // label="Email"
                            placeholder="example@gmail.com"
                            keyboardType="email-address"
                            mode="outlined"
                            autoCapitalize="none"
                            style={styles.input}
                            theme={{
                                colors: {
                                    primary: colors.green,
                                    outline: '#999999',
                                }
                            }}
                            onChangeText={updateEmail}
                        />
                        <TextInput
                            // label="Password"
                            placeholder="Password"
                            autoCapitalize="none"
                            mode="outlined"
                            secureTextEntry
                            style={styles.input}
                            theme={{
                                colors: {
                                    primary: colors.green,
                                    outline: '#999999',
                                }
                            }}
                            onChangeText={updatePassword}
                        />
                        {/* <Text style={{ color: 'red' }}>{tempErrDisplay}</Text> */}
                        <Button textColor="black" style={styles.googleBtn} mode="outlined" onPress={() => {}}>Continue with Google</Button>
                        <Button style={styles.btn} mode="contained" onPress={() => {
                            // router.replace("/(tabs)");
                            // router.navigate("/(tabs)");
                            handleAuth();
                        }}>{isSignUp ? "Sign Up" : "Sign In"}</Button>
                       
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </PaperProvider>
    )
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
    argonLogo: {
       resizeMode: 'contain', 
       width: 150, 
       height: 150,
       alignSelf: 'center',
       marginBottom: 30,
    },
    welcomeText: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 15,
        borderWidth: 0,
        backgroundColor: '#f5f5f5',
    },
    btn: {
        marginTop: 20,
        backgroundColor: '#009688'
    },
    googleBtn: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 5,
    },
})