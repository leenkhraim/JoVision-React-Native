import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Task24Component = forwardRef((props, ref) => {
  const [text, setText] = useState(''); // Local state to hold the text

  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText); // Update local state with new text
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.textOutput}>{text}</Text> {/* Display the text */}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '80%',
  },
  textOutput: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default Task24Component;
