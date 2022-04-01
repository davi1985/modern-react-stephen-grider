import { useEffect, useState } from "react";

export const CurrentTime = () => {
  const getTime = () => new Date().toLocaleTimeString();

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, [time]);

  return (
    <div>
      <p>Current Time:</p>

      <h3>{getTime()}</h3>
    </div>
  );
};
