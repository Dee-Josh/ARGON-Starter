import { useAuth } from "@/lib/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Button, Provider as PaperProvider, Text } from 'react-native-paper';
import Toast from 'react-native-toast-message';

// later you can return button to react native paper and use button instead of pressable


    const colors = {
        green: '#58B65A',
        darkBlue: '#1B242D',
        white: '#FFF',
    }



// LOGIN AND SIGN UP SCREEN
export default function LogIn() {

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

    const [isSignUp, setIsSignUp] = useState(true);
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [error, setError] = useState("");
    const [tempErrDisplay, setTempErrDisplay] = useState("");
    const [isInputFocused, setIsInputFocused] = useState(false);


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
                            placeholder="Name"
                            keyboardType="default"
                            autoCapitalize="none"
                            style={[styles.input, isInputFocused&&styles.isFocused]}
                            onChangeText={updateEmail}
                            // onFocus={()=>{setIsInputFocused(true)}}
            
                        />
                        <TextInput
                            // label="Email"
                            placeholder="Email"
                            // placeholder="example@gmail.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}      
                            onChangeText={updateEmail}
                        />
                        <TextInput
                            // label="Password"
                            placeholder="Password"
                            autoCapitalize="none"
                            secureTextEntry
                            style={[styles.input, styles.lastInput]}
                            onChangeText={updatePassword}
                        />
                        <Pressable onPress={()=>{router.push('/auth/ForgotPassword')}} style={styles.forgotPasswordContainer}><Text style={{fontSize: 11.5, color: colors.darkBlue}}>{!isSignUp&&"Forgot Password?"}</Text></Pressable>
                        {/* <Text style={{ color: 'red' }}>{tempErrDisplay}</Text> */}
                        <Pressable style={styles.googleBtn} onPress={() => {}}><Text style={{fontSize: 16}}>Continue with Google</Text></Pressable>
                        <Button style={styles.haveAccount} textColor={colors.darkBlue}onPress={() => {
                            setIsSignUp(!isSignUp);
                        }}
                        >
                            {isSignUp ? "Already have an account? Sign In." : "Don't have an account? Sign Up."}
                        </Button>
                        <Pressable style={styles.btn} onPress={() => {
                            // router.replace("/(tabs)");
                            // router.navigate("/(tabs)");
                            handleAuth();
                        }}><Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>{isSignUp ? "Sign Up" : "Log In"}</Text></Pressable>
                       
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
        marginBottom: 18,
        borderWidth: 1,
        borderColor: "#999",
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 18,
        fontSize: 16,
    },
    lastInput: {
        marginBottom: 0
    },
    isFocused: {
        borderColor: colors.green,
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        height: 20,
    },
    googleBtn: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#999999',
        alignItems: 'center',
    },
    haveAccount: {
        marginTop: 5,
        // textDecorationLine: 'underline',
    },
    btn: {
        marginTop: 30,
        backgroundColor: colors.green,
        paddingVertical: 12,
        borderRadius: 100,
        alignItems: 'center',
    },
})