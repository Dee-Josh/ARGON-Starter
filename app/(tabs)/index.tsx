// HOME SCREEN

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import { Surface, Text } from "react-native-paper";
import Toast from "react-native-toast-message";
import habitArray from "@/lib/habits";


export default function Index() {
  const today = new Date().toDateString();
  //   const [habits, setHabits] = useState([
  //   {
  //     title: "Do this Once",
  //     description: "Drink 25 million gallons of water.",
  //     streak_count: 0,
  //     frequency: "Daily",
  //     date_completed: "",
  //     id: 0,
  //     idd: "hfffhh",
  //   },
  //   {
  //     title: "Do this Twice",
  //     description: "Drink 25 million gallons of water.",
  //     streak_count: 1,
  //     frequency: "Daily",
  //     // date_completed: "",
  //     date_completed: today,
  //     id: 1,
  //     idd: "hfhfhfh",
  //   },
  //   {
  //     title: "Do this Thrice",
  //     description: "Drink 25 million gallons of water.",
  //     streak_count: 0,
  //     frequency: "Daily",
  //     date_completed: "",
  //     id: 2,
  //     idd: "hfhfhfffh",
  //   },
  //   {
  //     title: "Do this Four-ice",
  //     description: "Drink 25 million gallons of water.",
  //     streak_count: 0,
  //     frequency: "Daily",
  //     date_completed: "",
  //     id: 3,
  //     idd: "hfhfhfjfjh",
  //   },
  //   {
  //     title: "Do this Five-ice",
  //     description: "Drink 25 million gallons of water.",
  //     streak_count: 0,
  //     frequency: "Daily",
  //     date_completed: "",
  //     id: 4,
  //     idd: "hfhfhjkkffh",
  //   },
  //   {
  //     title: "Do this Six-ice",
  //     description: "Drink 25 million gallons of water.",
  //     streak_count: 0,
  //     frequency: "Daily",
  //     date_completed: "",
  //     id: 5,
  //     idd: "kfkf",
  //   },
  // ])
  const [habits, setHabits] = useState(habitArray)
  


  const [isSwiped, setIsSwiped] = useState('');
  const [completedHabits, setCompletedHabits] = useState();
  // to know if it was completed today
  const isCompletedToday = (task: any) => {
    if (task.date_completed === today) {
      return true;
    }
  }


  function showToast(type: string, error: string) {
    Toast.show({
      type: type,
      text1: error,
      position: "top",
      topOffset: 50,
    })
  }

  const fetchHabits = async () => {
    // get habits from Database
  }


  const swipeableRefs = useRef<{ [key: string]: Swipeable | null }>({})

  const handleDeleteHabit = (id: any) => {
    // setHabits((prev)=>(
    //   prev.filter((item)=>item.id !== id)
    // ))

    let updatedHabits = [];
    const eachHabit = habits.map((habit) => {
      if (habit.id !== id) {
        updatedHabits.push(habit);
      }
      setHabits(updatedHabits)
    })
  }

  const handleCheckHabit = (id: any, isCompletedToday: any) => {
    if (!isCompletedToday) {
      // const newStreakCount = habits[id].streak_count + 1;

      let updatedHabits = [];
      const eachHabit = habits.map((habit) => {
        if (habit.id !== id) {
          updatedHabits.push(habit);
        } else {
          const newStreakCount = habit.streak_count + 1;
          const dateCompleted = today;
          updatedHabits.push({ ...habit, streak_count: newStreakCount, date_completed: dateCompleted })
        }
        setHabits(updatedHabits)
      })
    }

    // const newStreakCount = habits[id].streak_count++;
    // setHabits(habits.map((habit)=>(
    //   habit.id === id ? {...habit, streak_count: newStreakCount} : habit
    // )));
    // setHabits(updated)
  }


  const renderLeftActions = () => (
    <View style={styles.swipeActionLeft}>
      <MaterialCommunityIcons name="trash-can-outline" size={32} color={'#fff'} />
    </View>
  );

  const renderRightActions = (isCompletedToday: any) => (
    <View style={styles.swipeActionRight}>
      {!isCompletedToday ? <MaterialCommunityIcons name="check-circle-outline" size={32} color={'#fff'} /> :
        <Text style={{ color: '#FFF' }}>Completed Today</Text>}
    </View>
  );

  return (
    <View
      style={styles.container}
    >
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.title}>Today's Habits {today}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {habits.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}> No Habits Yet. Add your first Habit!</Text>
          </View>) : (
          habits.map((habits, key) => (
            <Swipeable ref={(ref) => {
              swipeableRefs.current[habits.title] = ref;
            }}
              key={key}
              overshootLeft={false}
              overshootRight={false}
              renderLeftActions={renderLeftActions}
              renderRightActions={() => (renderRightActions(isCompletedToday(habits)))}
              onSwipeableOpen={(direction) => {
                if (direction === 'left') {
                  handleDeleteHabit(habits.id);
                } else if (direction === 'right') {
                  handleCheckHabit(habits.id, isCompletedToday(habits));
                }
                // console.log(habits.id);

                swipeableRefs.current[habits.title]?.close();
              }}
            >
              <Surface style={[styles.card, isCompletedToday(habits) && styles.cardCompleted]} elevation={0}>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{habits.title}</Text>
                  <Text style={styles.cardDescription}>{habits.description}</Text>
                  <View style={styles.cardFooter}>
                    <View style={styles.streakBadge}>
                      <MaterialCommunityIcons name="fire" size={18} color={'#ff9800'} />
                      <Text style={styles.streakText}>{habits.streak_count} day streak</Text>
                    </View>
                    <View style={styles.frequencyBadge}>
                      <Text style={styles.frequencyText}>{habits.frequency}</Text>
                    </View>
                  </View>
                </View>
              </Surface>
            </Swipeable>
          ))
        )
        }
      </ScrollView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontWeight: 'bold'
  },
  card: {
    marginBottom: 18,
    borderRadius: 18,
    backgroundColor: '#f7f7f2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    borderColor: '#0000009f',
    borderWidth: 1
  },
  cardCompleted: {
    opacity: 0.6,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#22223b'
  },
  cardDescription: {
    fontSize: 15,
    marginBottom: 16,
    color: '#6c6c80'
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streakBadge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff3e0',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  streakText: {
    marginLeft: 6,
    color: '#ff9800',
    fontWeight: 'bold',
    fontSize: 14,

  },
  frequencyBadge: {
    alignItems: 'center',
    backgroundColor: '#ede7f6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  frequencyText: {
    color: '#7c4dff',
    fontWeight: 'bold',
    fontSize: 14,

  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    color: '#666',
  },
  swipeActionLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#e53935',
    borderRadius: 18,
    marginBottom: 18,
    marginTop: 2,
    paddingLeft: 16,
  },
  swipeActionRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    backgroundColor: '#4caf50',
    borderRadius: 18,
    marginBottom: 18,
    marginTop: 2,
    paddingRight: 16,
  },
})


/** backgroundColor: '#009688',**/
