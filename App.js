import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredInput => {
    setEnteredGoal(enteredInput);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
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
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
  },
  item: {
    fontSize: 20,
    marginBottom: 10,
    padding: 5,
    backgroundColor: "#e5e5e5"
  }
});
