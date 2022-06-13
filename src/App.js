import React, { useState, useRef, useEffect } from 'react'
import BarCharty from './barChart';
import LineCharty from './lineChartBasic';
import PieCharty from './pieChart';
import ProgressBar from './NewProgressBar';
import Sidebary from './Sidebary';
//this is a test

export default function App() {
  const [progress, setProgress] = React.useState(1);
  

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 1));
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);



  return (
    <div>
      <div>
        <Sidebary/>
      </div>
      <ProgressBar value={progress} />
    </div>
  )
}

