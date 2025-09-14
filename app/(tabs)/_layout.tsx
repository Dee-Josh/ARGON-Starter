import { Tabs } from "expo-router";
import { View } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function TabsLayout() {
  return(
    <Tabs screenOptions={{tabBarActiveTintColor: "#009688", headerShadowVisible: false, headerTitleAlign: 'center', headerStyle: {backgroundColor: '#f5f5f5',}}}>
      <Tabs.Screen 
        name="index" 
        options={{title: 'Home',
        tabBarIcon: ({color, size})=>(
          <MaterialCommunityIcons name="calendar-today" size={size} color={color} />
        )
        }} 
      />
      <Tabs.Screen 
        name="streaks" 
        options={{title: 'Streaks',
        tabBarIcon: ({color, size})=>(
          <MaterialCommunityIcons name="chart-line" size={size} color={color} />
        )
        }} 
      />
      <Tabs.Screen 
        name="add-habits" 
        options={{title: 'Add Habit',
        tabBarIcon: ({color, size})=>(
          <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
        )
        }} 
      />
      <Tabs.Screen 
        name="resources" 
        options={{title: 'Resources',
        tabBarIcon: ({color, size})=>(
          <MaterialCommunityIcons name="book" size={size} color={color} />
        )
        }} 
      />
    </Tabs>
  )
}



 