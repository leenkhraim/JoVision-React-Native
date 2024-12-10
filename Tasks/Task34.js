// Tasks/Task34.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Task34Component from '../Components/Task34Component'; // Import the custom hook

const Task34 = () => {
  const [isTimeVisible, setIsTimeVisible] = useState(true); // State to toggle visibility
  const { time, date } = Task34Component(); // Using the custom hook to get time and date

  return (
    <View style={styles.container}>
      <Button
        title={isTimeVisible ? 'Hide Time' : 'Show Time'}
        onPress={() => setIsTimeVisible(!isTimeVisible)} // Toggle time visibility
      />

      {isTimeVisible && (
        <View style={styles.timeContainer}>
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  timeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  dateText: {
    fontSize: 20,
    color: '#000',
  },
  timeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
});

export default Task34;
