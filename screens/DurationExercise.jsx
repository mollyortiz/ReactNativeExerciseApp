import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

function DurationExercise({ route, navigation }) {
  const { name } = route.params; // Get the exercise name from route params
  const [time, setTime] = useState(0); // Track time in hundredths of a second
  const [isRunning, setIsRunning] = useState(false); // Whether the timer is running

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time by 1 hundredth of a second
      }, 10); // Update every 10 milliseconds (1000ms / 100 = 10ms for 100ths)
    } else {
      clearInterval(interval); // Stop updating when not running
    }
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [isRunning]);

  // Function to format time as MM:SS.mmm (minutes:seconds.hundredths)
  const formatTime = (time) => {
    const seconds = Math.floor(time / 100); // Get full seconds
    const milliseconds = time % 100; // Get remaining hundredths of a second
    return `${seconds.toString().padStart(2, "0")}:${milliseconds
      .toString()
      .padStart(2, "00")}`; // Format as MM:SS.mmm
  };

  return (
    <View>
      <Text>{name}</Text>
      <Text>Time: {formatTime(time)}</Text>
      <Button title="Start" onPress={() => setIsRunning(true)} />
      <Button title="Stop" onPress={() => setIsRunning(false)} />
      <Button
        title="Reset"
        onPress={() => {
          setTime(0);
          setIsRunning(false);
        }}
      />
      <Button title="Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DurationExercise;
