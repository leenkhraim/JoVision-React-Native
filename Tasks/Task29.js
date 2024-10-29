import React, { useRef, useState } from 'react';
import { StyleSheet, View, FlatList, Image, Alert, Pressable, Text, ImageBackground, Button } from 'react-native';
import Dialog from 'react-native-dialog';

const Task29 = () => {
  const images = [
    require('../Images/arya.jpg'),
    require('../Images/jon.jpg'),
    require('../Images/dany.jpg'),
    require('../Images/tyrion.jpg'),
    require('../Images/sansa.jpg'),
    require('../Images/jaime.jpg'),
    require('../Images/cersei.jpg'),
    require('../Images/brienne.jpg'),
    require('../Images/robb.jpg'),
    require('../Images/ned.jpg'),
  ];

  const flatListRef = useRef(null); // Reference for the FlatList
  const [dialogVisible, setDialogVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');

  // Function to handle image press
  const handleImagePress = (index) => {
    Alert.alert("You have selected image:", `Character ${index + 1}`);
  };

  // Function to show dialog
  const showDialog = () => {
    setDialogVisible(true);
  };

  // Function to handle index input
  const handleConfirm = () => {
    const index = parseInt(inputIndex) - 1; // Convert input to zero-based index
    if (!isNaN(index) && index >= 0 && index < images.length) {
      flatListRef.current.scrollToIndex({ animated: true, index });
    } else {
      Alert.alert("Invalid index. Please enter a number between 1 and 10.");
    }
    setInputIndex('');
    setDialogVisible(false);
  };

  // Render function for each item in the FlatList
  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)} style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );

  return (
    <ImageBackground 
      source={require('../Images/got.jpg')} // Your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Game of Thrones Characters</Text>
        <Button title="Scroll to Image" onPress={showDialog} />
        
        <FlatList
          ref={flatListRef} // Attach the ref to FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          vertical // Set to vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />

        <Dialog.Container visible={dialogVisible}>
          <Dialog.Title>Scroll to Image</Dialog.Title>
          <Dialog.Description>
            Enter the index of the image (1-10):
          </Dialog.Description>
          <Dialog.Input 
            keyboardType="numeric" 
            value={inputIndex} 
            onChangeText={setInputIndex} 
          />
          <Dialog.Button label="Cancel" onPress={() => setDialogVisible(false)} />
          <Dialog.Button label="OK" onPress={handleConfirm} />
        </Dialog.Container>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align to top for vertical layout
    alignItems: 'center',
    paddingTop: 50,
    opacity: 0.9,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  imageContainer: {
    marginVertical: 10, // Vertical margin for spacing
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});

export default Task29;
