import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const Component22 = ({ onTextChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type here..."
        onChangeText={onTextChange} // Call the function passed from the parent
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '80%',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default Component22;
