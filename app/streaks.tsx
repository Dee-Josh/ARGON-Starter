import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Text } from "react-native-paper";
import habitArray from "@/lib/habits";



export default function StreaksScreen() {
  const today = new Date().toDateString();

  const [habits, setHabits] = useState(habitArray)

  const rankedHabits = [
    {
      habit: {
        title: "Do this Once",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 0,
        idd: "hfffhh",
      },
      streak: "",
      bestStreak: "",
      total: 0,
    },
    {
      habit: {
        title: "Do this Twice",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 0,
        idd: "hfffhh",
      },
      streak: "",
      bestStreak: "",
      total: 0,
    },
    {
      habit: {
        title: "Do this Thrice",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 0,
        idd: "hfffhh",
      },
      streak: "",
      bestStreak: "",
      total: 0,
    },
    {
      habit: {
        title: "Do this Four-ice",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 0,
        idd: "hfffhh",
      },
      streak: "",
      bestStreak: "",
      total: 0,
    },
    {
      habit: {
        title: "Do this Five-ice",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 0,
        idd: "hfffhh",
      },
      streak: "",
      bestStreak: "",
      total: 0,
    },
    {
      habit: {
        title: "Do this Six-ice",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 0,
        idd: "hfffhh",
      },
      streak: "",
      bestStreak: "",
      total: 0,
    },

  ];

  const badgeStyles = [styles.badge1, styles.badge2, styles.badge3]

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>Habits Streak</Text>
      {
        rankedHabits.length > 0 && (
          <View style={styles.rankingContainer}>
            <Text style={styles.rankingTitle}>🏅 Top Streaks</Text>
            {rankedHabits.slice(0, 3).map((item, key) => (
              <View key={key} style={styles.rankingRow}>
                <View style={[styles.rankingBadge, badgeStyles[key]]}>
                  <Text style={styles.rankingBadgeText}>{key + 1}</Text>
                </View>
                <Text style={styles.rankingHabit}>{item.habit.title}</Text>
                <Text style={styles.rankingStreak}>{item.bestStreak || 0}</Text>
              </View>
            ))}
          </View>
        )
      }
      {
        habits.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}> No Habits Yet. Add your first Habit!</Text>
          </View>) : (
          <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {rankedHabits.map(({ habit, streak, bestStreak, total }, key) => (
              <Card key={key} style={[styles.card, key === 0 && styles.firstCard]}>
                <Card.Content>
                  <Text variant="headlineMedium" style={styles.habitTitle}>{habit.title}</Text>
                  <Text style={styles.habitDescription}>{habit.description}</Text>
                  <View style={styles.statsRow}>
                    <View style={styles.statBadge}>
                      <Text style={styles.statBadgeText}>🔥 {streak}</Text>
                      <Text style={styles.statBadgeLabel}>Current</Text>
                    </View>
                    <View style={styles.statBadgeGold}>
                      <Text style={styles.statBadgeText}>🏆 {bestStreak}</Text>
                      <Text style={styles.statBadgeLabel}>Best</Text>
                    </View>
                    <View style={styles.statBadgeGreen}>
                      <Text style={styles.statBadgeText}>✅ {total}</Text>
                      <Text style={styles.statBadgeLabel}>Total</Text>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            ))
            }</ScrollView>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    color: '#666',
  },
  card: {
    marginBottom: 18,
    borderRadius: 18,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  firstCard: {
    borderWidth: 2,
    borderColor: "#7c4dff",
  },
  habitTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 0,
  },
  habitDescription: {
    color: "#6c6c80",
    marginBottom: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop: 8,
  },
  statBadge: {
    backgroundColor: "#fff3e0",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    minWidth: 60,
  },
  statBadgeGold: {
    backgroundColor: "#fffde7",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    minWidth: 60,
  },
  statBadgeGreen: {
    backgroundColor: "#e8f5e9",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    minWidth: 60,
  },
  statBadgeText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#22223b"
  },
  statBadgeLabel: {
    fontSize: 11,
    color: "#888",
    marginTop: 2,
    fontWeight: "500",
  },
  rankingContainer: {
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  rankingTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
    color: "#fc4dff",
    letterSpacing: 0.5,
  },
  rankingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 8,
  },
  rankingBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "#e0e0e0",
  },
  badge1: { backgroundColor: "#ffd700" }, // Gold BGC
  badge2: { backgroundColor: "#c0c0c0" }, // Silver BGC
  badge3: { backgroundColor: "#cd7f32" }, // Bronze BGC

  rankingBadgeText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
  },
  rankingHabit: {
    flex: 1,
    fontSize: 15,
    color: "#333",
    fontWeight: 800,
  },
  rankingStreak: {
    fontSize: 14,
    color: "#7c4dff",
    fontWeight: 'bold',
  },
})
