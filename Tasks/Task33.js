import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Video from 'react-native-video';

const Task33 = () => {
  const videoPlayer = useRef(null); // Ref to control the video player
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
  const [showVideo, setShowVideo] = useState(false); // To track whether to show the video or the poster

  // Handle the poster click to start the video
  const handlePosterClick = () => {
    console.log("Poster clicked");
    setShowVideo(true); // Show the video when the poster is clicked
    setIsPlaying(true); // Ensure video starts playing
  };

  // Toggle play/pause when video is clicked
  const handleVideoClick = () => {
    console.log("Play/Pause clicked");
    setIsPlaying((prev) => !prev); // Toggle the play/pause state
  };

  return (
    <View style={styles.container}>
      {/* Title above the poster */}
      <Text style={styles.title}>The Battle</Text>

      {/* Show the poster if video isn't playing */}
      {!showVideo ? (
        <View style={styles.posterWrapper}>
          {/* Title and Poster */}
          <TouchableOpacity onPress={handlePosterClick} style={styles.posterContainer}>
            <Image
              source={require('../Images/poster.jpg')} // Ensure this path is correct
              style={styles.poster}
            />
          </TouchableOpacity>
        </View>
      ) : (
        // If the video is playing, show the video
        <TouchableOpacity onPress={handleVideoClick} style={styles.videoWrapper}>
          <Video
            ref={videoPlayer} // Attach the ref to control the video
            source={require('../Images/battle.mp4')} // Path to your video file
            style={styles.video}
            controls={false} // Disable native controls
            resizeMode="cover" // Ensure the video fills the container without bars
            paused={!isPlaying} // Pause or play video based on state
            onEnd={() => {
              setIsPlaying(false); // Stop playing and reset to poster when video ends
              setShowVideo(false);
              console.log("Video ended. Resetting state.");
            }}
            onError={(error) => {
              console.log("Video error: ", error);
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Black background for video area
  },
  title: {
    fontSize: 24, // Large font size for the title
    color: '#fff', // White text color
    fontWeight: 'bold', // Bold text
    marginBottom: 10, // Space between title and poster
    textAlign: 'center', // Center the title
  },
  posterWrapper: {
    alignItems: 'center', // Center the poster
  },
  poster: {
    width: 300, // Set width for the poster
    height: 200, // Set height for the poster
    resizeMode: 'contain', // Ensure the poster fits within the container
  },
  videoWrapper: {
    width: '100%',
    height: 300, // Same as video height
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%', // Make video fill the container
  },
});

export default Task33;
