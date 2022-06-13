import React, { useState, useRef, useEffect } from 'react'
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from "react-router-dom";
import ProgressBar from './NewProgressBar';
import Sidebary from './Sidebary';


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
        <div>
          <ProgressBar value={progress} />
        </div>
      </div>
    </div>
  )
}
//test
