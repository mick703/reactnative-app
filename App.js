import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  const deleteGoalHandler = goalToDelete => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goalItem => {
        return goalItem.key !== goalToDelete.key;
      });
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoalHandler} />
      <GoalList goalItems={courseGoals} deleteGoal={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1
  }
});
