import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from "react-router-dom"
import ProgressBar from './Menu Stuff/NewProgressBar'
import Sidebary from './Menu Stuff/Sidebary'


export default function App() {
  const [progress, setProgress] = React.useState(1)
  

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 1))
    }, 100)
    return () => {
      clearInterval(timer)
      //I think this is where I would put some code to make the site cycle through the charts
    }
  }, [])



  return (
    <div>
      <div>
        <Sidebary/>
        <div>
          <ProgressBar value={progress} />
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}> This is a motivation quote </h1>
      </div>
    </div>
  )
}
//test
