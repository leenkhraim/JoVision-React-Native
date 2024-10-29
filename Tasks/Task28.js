import React from 'react';
import { StyleSheet, View, FlatList, Image, Alert, Pressable, Text, ImageBackground } from 'react-native';

const Task28 = () => {
  // Array of Game of Thrones character images
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

  // Function to handle image press
  const handleImagePress = (index) => {
    Alert.alert("You have selected image:", `Character ${index + 1}`);
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
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    opacity: 0.9, // Slight transparency for a soft overlay
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
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Adds a shadow effect
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

export default Task28;
