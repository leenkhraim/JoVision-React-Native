import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Task21Component from '../Components/Task21Component'; 

class Task21 extends Component {
  state = {
    showTask21Component: false,
  };

  toggleTask21Component = () => {
    this.setState((prevState) => ({ showTask21Component: !prevState.showTask21Component }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show" onPress={this.toggleTask21Component} />
        {this.state.showTask21Component && <Task21Component />}
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
});

export default Task21;
