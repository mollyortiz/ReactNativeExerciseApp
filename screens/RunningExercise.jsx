import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

function RunningExercise({ route }) {
  const { name } = route.params; // Get the exercise name from the params
  const [laps, setLaps] = useState([]); // Array to store lap times
  const [runningTime, setRunningTime] = useState(0); // Track the total running time in tenths of a second
  const [isRunning, setIsRunning] = useState(false); // Whether the timer is running

  useEffect(() => {
    let interval;

    if (isRunning) {
      // Set an interval to update running time every 100ms (tenths of a second)
      interval = setInterval(() => {
        setRunningTime((prevTime) => prevTime + 1); // Increment by 1 for each 100ms
      }, 100); // 100ms interval for tenths of a second
    } else {
      clearInterval(interval); // Stop the interval when it's not running
    }

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [isRunning]);

  // Function to record a lap
  const recordLap = () => {
    const lapTime = runningTime; // Record the current running time as the lap time
    setLaps([...laps, lapTime]); // Add the lap time to the laps array
    setRunningTime(0); // Reset running time for the next lap
  };

  // Format time as MM:SS.TT
  const formatTime = (time) => {
    const minutes = Math.floor(time / 600)
      .toString()
      .padStart(2, "0"); // 600 tenths = 1 minute
    const seconds = Math.floor((time % 600) / 10)
      .toString()
      .padStart(2, "0"); // 10 tenths = 1 second
    const tenths = (time % 10).toString(); // Get the remaining tenths
    return `${minutes}:${seconds}.${tenths}`; // Format as MM:SS.TT
  };

  return (
    <View>
      <Text>{name} Exercise</Text>
      <Text>Running Time: {formatTime(runningTime)}</Text>

      <Button
        title={isRunning ? "Stop" : "Start"}
        onPress={() => setIsRunning(!isRunning)} // Toggle the timer on/off
      />
      <Button
        title="Record Lap"
        onPress={recordLap} // Record the lap and reset the time
      />
      <Button
        title="Reset"
        onPress={() => {
          setRunningTime(0); // Reset the total running time
          setLaps([]); // Clear the laps array
          setIsRunning(false); // Stop the timer
        }} // Reset everything
      />
      <Text>Laps:</Text>
      {laps.length === 0 ? (
        <Text>No laps recorded yet</Text>
      ) : (
        <View>
          {laps.map((lap, index) => (
            <Text key={index}>
              Lap {index + 1}: {formatTime(lap)} seconds
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

export default RunningExercise;
