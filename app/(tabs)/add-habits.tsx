import { useAuth } from "@/lib/context/AuthContext";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, SegmentedButtons, TextInput, Button, useTheme } from "react-native-paper";

const FREQUENCIES = ["daily", "weekly", "monthly"]


export default function AddHabitsScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [error, setError] = useState("");
  const {user} = useAuth();
  const theme = useTheme();

  const handleSubmit = async ()=> {
    if (!user) return;
  }


  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        mode="outlined"
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        label="Description"
        mode="outlined"
        onChangeText={setDescription}
        style={styles.input}
      />
      <View style={styles.frequencyContainer}>
        <SegmentedButtons buttons={FREQUENCIES.map((freq)=> ({
            value: freq,
            label: freq.charAt(0).toUpperCase() + freq.slice(1),
          }))} 
          value = {frequency}
          onValueChange={(value)=>{
            setFrequency(value);
          }}
        />
      </View>
      <Button 
        mode="contained" 
        disabled={!title || !description}
        onPress={handleSubmit}  
      >
        Add Habit
      </Button>
      {error && (<Text style={{color: theme.colors.error}}>{error}</Text>)}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    marginBottom: 10,
  },
  frequencyContainer: {
    marginBottom: 24,
  },
 })
