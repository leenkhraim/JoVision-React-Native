import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Task25Component from '../Components/Task25Component';

class Task25 extends Component {
  constructor(props) {
    super(props);
    this.task25Ref = React.createRef(); // Create a ref for Task25Component
  }

  handleTextChange = (text) => {
    if (this.task25Ref.current) {
      this.task25Ref.current.updateText(text); // Call the updateText method on the ref
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here..."
          onChangeText={this.handleTextChange} // Update on text change
        />
        <Task25Component ref={this.task25Ref} /> {/* Pass the ref */}
      </View>
    );
  }
}

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

export default Task25;
