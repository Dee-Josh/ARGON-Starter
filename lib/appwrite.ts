import {Account, Client, Databases} from 'react-native-appwrite';

// const client = new Client()
// .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
// .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const client = new Client()
.setEndpoint("https://0-di39e-anonymous-8081.exp.direct/v1")
.setProject("8ad28e00016589fc46f");

export const account = new Account(client);
export const databases = new Databases(client);