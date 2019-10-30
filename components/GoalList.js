import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text
} from "react-native";

export default GoalList = props => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={props.goalItems}
      renderItem={itemData => (
        <TouchableOpacity onPress={props.deleteGoal.bind(this, itemData.item)}>
          <View style={styles.item}>
            <Text>{itemData.item.value}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    marginBottom: 10,
    padding: 5,
    backgroundColor: "#e5e5e5"
  }
});
