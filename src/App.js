import React, { useState, useRef, useEffect } from 'react'
import BarCharty from './barChart';
import StockChart from './stockChart';
import PieCharty from './pieChart';
import ProgressBar from './NewProgressBar';
import Sidebar from './Sidebar';
import './App.css';




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
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div>
        <BarCharty />
      </div>
      {/* <div>
        <StockChart />
      </div>
      <div>
        <PieCharty />
      </div> */}
      <ProgressBar value={progress} />
    </div>
  )
}

