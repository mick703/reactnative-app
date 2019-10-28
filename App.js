import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text } from "react-native";

export default function App() {
  const [goalToAdd, setGoalToAdd] = useState("");
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredInput => {
    setEnteredGoal(enteredInput);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
    setEnteredGoal("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map(goal => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row"
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  }
});
