// FOR AUTHENTICATING ACCOUNT CREATION AND LOGIN USING APPWRITE

import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite";
import { ID } from "react-native-appwrite";



const AuthContext = createContext();

export function AuthProvider(props){

    const [user, setUser] = useState();

    const [isLoadingUser, setIsLoadingUser] = useState(true); 

    useEffect(()=>{
        getUser();
    }, [])

    const getUser = async () => {
        try {
            const session = await account.get()
            setUser(session)
        } catch (error) {
            setUser(null)
        }finally {
            setIsLoadingUser(false)
        }
    }

    // FOR SIGNING UP NEW USER
    const signUp = async (email, password) => {
        try{
            await account.create(ID.unique(), email, password);
            await signIn(email, password); // To automatically sign in user after signing up.
            return null
        } catch(error){
            if (error instanceof Error){ //If the error is an error recognised as part of Javascript Errors
                return error.message;
            }
            return "An error occured during signup";
        }
    }

    // FOR SIGNING IN EXISTING USER 
    const signIn = async (email, password) => {
        try{
            await account.createEmailPasswordSession(email, password);
            return null
        } catch(error){
            if (error instanceof Error){ //If the error is an error recognised as part of Javascript Errors
                return error.message;
            }
            return "An error occured during signin";
        }
    }

    return<>
        <AuthContext.Provider value={{ current: user, isLoadingUser, signUp, signIn}}>
            {props.children}
        </AuthContext.Provider>
    </>
}

export function useAuth(){ // Function to allow the AuthContext available to every other file (jsx) so that we won't have to import it everywhere

    const context = useContext(AuthContext);

    if (context === undefined){
        throw new Error ("useAuth must be inside of the Auth Provider");
    }

    return context; 
}