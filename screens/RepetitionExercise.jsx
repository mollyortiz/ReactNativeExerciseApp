import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function RepetitionExercise({ route, navigation }) {
  const { name } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{name} Exercise</Text>
      <Text>Repetitions: {count}</Text>
      <Button
        title="Increase/Complete Rep"
        onPress={() => setCount(count + 1)}
      />
      <Button title="Reset" onPress={() => setCount(0)} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default RepetitionExercise;
