import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredInput => {
    setEnteredGoal(enteredInput);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="ADD"
        onPress={() => {
          props.addGoal(enteredGoal);
          setEnteredGoal("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row"
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  }
});
export default GoalInput;
