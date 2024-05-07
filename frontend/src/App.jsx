// import React, { useEffect, useRef, useState } from 'react';

// function App() {
//   const [time, setTime] = useState(0);
//   const [start, setStart] = useState(false);
//   const [stop, setStop] = useState(true);
//   const intervalRef = useRef();

//   useEffect(() => {
//     if (start && !stop) {
//       intervalRef.current = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(intervalRef.current);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [start, stop]);

//   const handleStart = () => {
//     setStart(!start);
//     setStop(!stop);
//   };

//   const handleStop = () => {
//     setStop(!stop);
//   };

//   const handleReset = () => {
//     setTime(0);
//     clearInterval(intervalRef.current);
//     setStart(false);
//     setStop(true);
//   };

//   return (
//     <>
//       <h1>Stopwatch</h1>
//       <br />
//       <br />
//       <h1>{time}</h1>
//       <br />
//       <br />
//       <button onClick={handleStart}>{start ? 'Pause' : 'Start'}</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>Reset</button>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
 const [timer,settimer]=useState("00:00:00");
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

useEffect(() => {
  //set time
  const seconds = parseInt("98989");
  const date = new Date(null);
  date.setSeconds(seconds);

  //format time
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const secondsFormatted = date.getUTCSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${secondsFormatted}`;

  setTime(formattedTime);
}, []);
useEffect(() => {
  const date = new Date(null);
  date.setSeconds(time);
  const formattedTime = date.toISOString().substr(11, 8);
  settimer(formattedTime);
}, [time]);
  useEffect(() => {
    
    if (start && !stop) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
    return ()=>clearInterval(intervalId);
    
  }, [start, stop]);

  const handleStart = () => {
    setStart(!start);
    setStop(!stop);
  };

  const handleStop = () => {
    setStop(!stop);
  };

  const handleReset = () => {
    setTime(0);
    clearInterval(intervalId);
    setStart(false);
    setStop(true);
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <br />
      <br />
      <h1>{timer}</h1>
      <br />
      <br />
      <button onClick={handleStart}>{start ? 'Pause' : 'Start'}</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
