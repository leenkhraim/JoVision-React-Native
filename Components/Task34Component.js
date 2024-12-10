// Time Component
import { useState, useEffect } from 'react';

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  });

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      });
    };

    const intervalId = setInterval(updateTime, 1000);

    // Clear the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return currentTime;
};

export default useCurrentTime;
