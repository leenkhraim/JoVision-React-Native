import React from 'react';
import { View, Button } from 'react-native';
import Task19ClassComponent from '../Components/Task19ClassComponent';

const Task19 = () => {
  const [showPage, setShowPage] = React.useState(false);

  const togglePage = () => {
    setShowPage(prev => !prev);
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Button title="Show" onPress={togglePage} />
      {showPage && <Task19ClassComponent />}
    </View>
  );
};

export default Task19;
