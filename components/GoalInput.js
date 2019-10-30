import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredInput => {
    setEnteredGoal(enteredInput);
  };
  return (
    <Modal animationType="slide" visible={props.isVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="ADD"
            onPress={() => {
              props.addGoal(enteredGoal);
              setEnteredGoal("");
              props.closeModal();
            }}
          />
          <Button
            title="CANCEL"
            color="red"
            onPress={() => {
              setEnteredGoal("");
              props.closeModal();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: { flex: 1, justifyContent: "center", alignContent: "center" },
  input: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
export default GoalInput;
