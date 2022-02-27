import { useState, useEffect } from "react";

function useCounter(direction) {
  const [counterState, setCounterState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "UP") {
        setCounterState((counterState) => counterState + 1);
      }
      if (direction === "DOWN") {
        setCounterState((counterState) => counterState -1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [direction]);

  return counterState;
}
export default useCounter;
