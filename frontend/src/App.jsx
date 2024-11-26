import { set } from 'mongoose';
import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hours,setHours]=useState(0)
  const timer = useRef(null);
  function handleStart() {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setCount(prev => {
          if (prev === 59) {
            setMinute(prevm => {
              if (prevm === 59) {
                setHours(prevh => prevh + 1);
                return 0;
              } else {
                return prevm + 1;
              }
             
            })
            return 0;
          } else {
            return prev + 1;
          }
        })
        
      
   },1000/60)
   }
  }
  

  
  function handlePause() {
    clearInterval(timer.current)
    timer.current = null;
  }
  function handleClear() {
     clearInterval(timer.current)
    timer.current = null;
    setCount(0);
    setCount(0)
    setMinute(0)
  }

  return (
    <div className='p-3'>
      <div className='text-center text-[100px]   flex justify-center minw-[220px] border'>
        <div >{ hours<10? '0'+hours:hours}</div>:<div>{minute<10? '0'+minute:minute}</div>: <div>{count<10? '0'+count:count}</div>
      </div>
      <div className='text-center flex justify-center'>
        <button className="btn px-5 mx-5" onClick={handleStart}>Start</button>
        <button className="btn px-5 mx-5" onClick={handlePause}>Pause</button>
        <button className="btn px-5 mx-5" onClick={handleClear}>clear</button>
      </div>
    </div>
  )
}

export default App
