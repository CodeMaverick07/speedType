"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const useCountdown = (time: number) => {
  const intervelRef = useRef<NodeJS.Timeout | null | NodeJS.Timeout | any>(
    null
  );
  const [timeLeft, setTimeLeft] = useState(time);
  const hasTimeEnded = timeLeft <= 0;
  const isRunning = intervelRef.current !== null;

  const startCountdown = useCallback(() => {
    if (!hasTimeEnded && !isRunning) {
      intervelRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
  }, [setTimeLeft, hasTimeEnded, isRunning]);

  const resetCountdown = useCallback(() => {
    clearInterval(intervelRef.current);
    intervelRef.current = null;
    setTimeLeft(time);
  }, [time]);
  useEffect(() => {
    if (hasTimeEnded) {
      clearInterval(intervelRef.current);
      intervelRef.current = null;
    }
  }, [hasTimeEnded]);
  useEffect(() => {
    return () => {
      clearInterval(intervelRef.current);
    };
  }, []);
  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdown;
