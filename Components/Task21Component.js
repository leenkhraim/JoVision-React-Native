import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Task21Component = () => {
  useEffect(() => {
    console.log('Task21Component loaded on Leen Console');

    return () => {
      console.log('Task21Component unloaded on Leen Console');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is Task21 Functional Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
  },
});

export default Task21Component;
