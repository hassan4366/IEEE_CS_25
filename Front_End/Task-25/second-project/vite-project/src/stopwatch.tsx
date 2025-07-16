import React, { useState, useEffect, useRef } from "react";
import "./Stopwatch.css";

const Stopwatch: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (totalSeconds: number): string => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleStartPause = (): void => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="stopwatch-box">
        <div className="stopwatch-circle">
          <span className="stopwatch-time">{formatTime(seconds)}</span>
        </div>
        <div className="button-group">
          <button className="button" onClick={handleStartPause}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
