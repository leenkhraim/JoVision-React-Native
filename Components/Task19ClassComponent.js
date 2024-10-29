import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Task19ClassComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is a Class Component!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default Task19ClassComponent;
