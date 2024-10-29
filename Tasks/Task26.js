import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native';

const Task26 = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchIpAddressNonBlocking = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  const fetchIpAddressBlocking = async () => {
    setLoading(true); // Show loading indicator
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Fetch IP Non-Blocking" 
        onPress={fetchIpAddressNonBlocking} 
        disabled={loading} // Disable if loading
      />
      <Button 
        title="Fetch IP Blocking" 
        onPress={fetchIpAddressBlocking} 
        disabled={loading} // Disable if loading
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />} {/* Loading indicator */}
      <Text style={styles.ipText}>{ipAddress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ipText: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Task26;
