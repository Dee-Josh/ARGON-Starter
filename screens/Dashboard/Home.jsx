import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

import { Text } from "react-native-paper";

export default function Home(){

    return (
        <View>
            <Text>
                Welcome to the App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009688',
    }
})