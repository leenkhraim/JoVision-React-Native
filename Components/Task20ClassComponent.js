import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Task20ClassComponent extends Component {
  componentDidMount() {
    console.log('Task20ClassComponent loaded on Leen Console');
  }

  componentWillUnmount() {
    console.log('Task20ClassComponent unloaded on Leen console');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Task20ClassComponent</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
  },
});

export default Task20ClassComponent;
