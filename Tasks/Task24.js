import React, { useRef } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Task24Component from '../Components/Task24Component'; 

const Task24 = () => {
  const task24Ref = useRef(); // Create a ref for Task24Component

  const handleTextChange = (text) => {
    if (task24Ref.current) {
      task24Ref.current.updateText(text); // Call the updateText method on the ref
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type here..."
        onChangeText={handleTextChange} // Update on text change
      />
      <Task24Component ref={task24Ref} /> {/* Pass the ref */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 20,
  },
});

export default Task24;
