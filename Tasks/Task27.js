import React, { useState } from 'react';
import { StyleSheet, View, Button, Image, Alert } from 'react-native';

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(require('../Images/got.jpg')); // Default image

  const images = [
    require('../Images/dany.jpg'),
    require('../Images/download.jpg'),
    require('../Images/images.jpg'),
  ];

  const showImageSelector = () => {
    Alert.alert(
      "Select an Image",
      "Choose which character (Dany, Tyrion, or Jon)",
      [
        { text: "Dany", onPress: () => setSelectedImage(images[0]) },
        { text: "Tyrion", onPress: () => setSelectedImage(images[1]) },
        { text: "Jon", onPress: () => setSelectedImage(images[2]) },
        { text: "Cancel", style: "cancel" }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />
      <Button title="Choose Image" onPress={showImageSelector} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default Task27;
