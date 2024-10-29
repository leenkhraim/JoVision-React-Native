import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Component23 from '../Components/Task23Component'; 

class Task23 extends Component {
  state = {
    text: '', // State to hold the text
  };

  handleTextChange = (newText) => {
    this.setState({ text: newText }); // Update state with new text
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textOutput}>{this.state.text}</Text> {/* Display the text */}
        <Component23 onTextChange={this.handleTextChange} /> {/* Pass the function as a prop */}
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
  textOutput: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Task23;
