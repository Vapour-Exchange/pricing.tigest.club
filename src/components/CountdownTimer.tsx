
import { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Calculate time left function
    const calculateTimeLeft = () => {
      const difference = new Date('2025-03-13').getTime() - new Date().getTime();
      let newTimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return newTimeLeft;
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Set up the interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 justify-center text-sm font-medium">
      <div className="flex flex-col items-center">
        <span className="bg-primary-light text-primary px-2 py-1 rounded">{timeLeft.days}</span>
        <span className="text-xs text-gray-500">days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="bg-primary-light text-primary px-2 py-1 rounded">{timeLeft.hours}</span>
        <span className="text-xs text-gray-500">hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="bg-primary-light text-primary px-2 py-1 rounded">{timeLeft.minutes}</span>
        <span className="text-xs text-gray-500">mins</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="bg-primary-light text-primary px-2 py-1 rounded">{timeLeft.seconds}</span>
        <span className="text-xs text-gray-500">secs</span>
      </div>
    </div>
  );
};
