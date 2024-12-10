import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Video from 'react-native-video';

const Task32 = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to control video play

  const handlePlay = () => {
    console.log('Poster clicked');
    setIsPlaying(true); // When the poster is clicked, set isPlaying to true
  };

  return (
    <View style={styles.container}>
      {/* Debugging Text */}
      <Text style={styles.debugText}>{isPlaying ? 'Video is playing' : 'Show poster'}</Text>

      {/* If the video isn't playing, show the poster */}
      {!isPlaying ? (
        <View style={styles.posterWrapper}>
          {/* Title above the poster */}
          <Text style={styles.title}>The Battle</Text>
          <TouchableOpacity onPress={handlePlay} style={styles.posterContainer}>
            <Image
              source={require('../Images/poster.jpg')} // Path to your poster image
              style={styles.poster}
            />
          </TouchableOpacity>
        </View>
      ) : (
        // If the video is playing, show the video
        <Video
          source={require('../Images/battle.mp4')} // Path to your video file
          style={styles.video}
          controls={true} // Enable controls for the video
          resizeMode="contain" // Resize the video to fit within the container
          onEnd={() => setIsPlaying(false)} // Reset to poster when video ends
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Black background to match video
  },
  posterWrapper: {
    alignItems: 'center', // Center align title and poster
  },
  title: {
    fontSize: 24, // Large font size for the title
    color: '#fff', // White text color
    fontWeight: 'bold', // Bold text
    marginBottom: 10, // Space between title and poster
    textAlign: 'center', // Center the title
  },
  posterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: 300, 
    height: 200, 
    resizeMode: 'contain',
  },
  video: {
    width: '100%',
    height: 300, 
  },
  debugText: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: 'white',
  },
});

export default Task32;
