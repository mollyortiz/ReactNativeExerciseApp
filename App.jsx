import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Update the imports to reflect the correct paths to your screens
import HomeScreen from "./screens/HomeScreen";
import RepetitionExercise from "./screens/RepetitionExercise";
import DurationExercise from "./screens/DurationExercise";
import RunningExercise from "./screens/RunningExercise";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="RepetitionExercise"
          component={RepetitionExercise}
        />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
        <Stack.Screen name="RunningExercise" component={RunningExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
