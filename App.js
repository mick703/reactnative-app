import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  const closeModalHandler = () => {
    setIsShowModal(false);
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
      <Button
        title="Add New Goal"
        onPress={() => {
          setIsShowModal(true);
        }}
      />
      <GoalInput
        addGoal={addGoalHandler}
        isVisible={isShowModal}
        closeModal={closeModalHandler}
      />
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
