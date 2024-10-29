import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Change loading state to false
    }, 5000);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </>
      ) : (
        <Text style={styles.name}>Leen Khraim</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
