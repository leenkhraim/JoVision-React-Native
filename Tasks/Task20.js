import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Task20ClassComponent from '../Components/Task20ClassComponent';

class Task20 extends Component {
  state = {
    showTask20ClassComponent: false,
  };

  toggleTask20ClassComponent = () => {
    this.setState((prevState) => ({ showTask20ClassComponent: !prevState.showTask20ClassComponent }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show" onPress={this.toggleTask20ClassComponent} />
        {this.state.showTask20ClassComponent && <Task20ClassComponent />}
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

export default Task20;
