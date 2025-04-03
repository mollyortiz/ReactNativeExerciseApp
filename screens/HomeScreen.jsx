import React from "react";
import { View, FlatList, Button } from "react-native";

function HomeScreen({ navigation }) {
  const exercises = [
    { name: "Push-Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Running", type: "running" },
  ];

  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      onPress={() => {
        // Navigate to the correct screen based on the type
        if (item.type === "repetition") {
          navigation.navigate("RepetitionExercise", { name: item.name });
        } else if (item.type === "duration") {
          navigation.navigate("DurationExercise", { name: item.name });
        } else {
          navigation.navigate("RunningExercise", { name: item.name });
        }
      }}
    />
  );

  return (
    <View>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

export default HomeScreen;
