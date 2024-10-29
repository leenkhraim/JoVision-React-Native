import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class Task16 extends Component {
  constructor() {
    super();
    this.state = {
      content: true,
    };
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }));
  };

  render() {
    return (
      <View style={styles.container}>
        {
          // Display the content when state object "content" is true.
          // Hide the content when state object "content" is false. 
          this.state.content ? <Text style={styles.headerText}>Leen Khraim</Text> : null
        }

        <Button title={this.state.content ? "Hide Text" : "Show Text"} onPress={this.componentHideAndShow} />
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
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default Task16;
