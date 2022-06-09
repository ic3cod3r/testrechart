import React, { useState, useRef, useEffect } from 'react'
//import { PieChart } from 'recharts';
import BarCharty from './barChart';
import StockChart from './stockChart';
import PieCharty from './pieChart';
import Timery from './timer';
// import NoApproval from './timer';
import ProgressBar from "./progress-bar.component";



function App() {
  const [completed, setCompleted] = useState(0);   // This goes with the ProgressBar

  useEffect(() => {    
    // setInterval(() => setCompleted(Math.floor (Math.random() * 100) + 1), 1000);     
    setInterval(() => setCompleted(Math.floor (<Timery/>)));
  }, []);     
  // (Math.random() * 100)
  return (
    <div>
      <div>
        <BarCharty />
      </div>
      <div>
        <StockChart/>
      </div>
      <div>
        <PieCharty/>
      </div>
      <div className="App">
        <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />    
      </div>

    </div>

  )
}
export default App
