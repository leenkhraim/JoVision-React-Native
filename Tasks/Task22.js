import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Component22 from '../Components/Task22Component'; 


class Task22 extends Component {
    state = {
      text: '', // State to hold the text
    };
  
    handleTextChange = (newText) => {
      this.setState({ text: newText }); // Update state with new text
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.textOutput}>{this.state.text}</Text> {/* Correctly wrapped in <Text> */}
          <Component22 onTextChange={this.handleTextChange} /> {/* Pass the function as a prop */}
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
  
  export default Task22;