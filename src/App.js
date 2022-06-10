import React, { useState, useRef, useEffect } from 'react'
//import { PieChart } from 'recharts';
import BarCharty from './barChart';
import StockChart from './stockChart';
import PieCharty from './pieChart';
// import Timery from './timer';

// import ProgressBar from "./progress-bar.component";
import ProgressBar from './NewProgressBar';


export default function App() {
  const [value, updateValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {

      updateValue(oldValue => {

        const newValue = oldValue + 1;

        if (newValue >= 99) {
          
          clearInterval(interval);
        }
        
        return newValue;
      });
    }, 100);
  }, []);




  return (
    <div>
      <div>
        <BarCharty />
      </div>
      <div>
        <StockChart />
      </div>
      <div>
        <PieCharty />
      </div>
      <ProgressBar value={value} />
    </div>
  )
}

