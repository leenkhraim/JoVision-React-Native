import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Task16 = () => {
  const [showName, setShowName] = useState(false);
  const name = "Leen"; 

  const toggleName = () => {
    setShowName(!showName);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleName} />
      {showName && <Text style={styles.name}>{name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: 20,
    fontSize: 24,
  },
});

export default Task16;
