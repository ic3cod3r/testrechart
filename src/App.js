import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from "react-router-dom"
import ProgressBar from './Menu Stuff/NewProgressBar'
import Sidebary from './Menu Stuff/Sidebary'


export default function App() {
  const [progress, setProgress, item] = React.useState(1)
  

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 1))
  //   }, 100)
  //   return () => {
  //     clearInterval(timer)
      
  //   }
  // }, [])

  React.useEffect(() => {
    const timer = setInterval(() => setProgress(item[id >= (item.length - 1) ? 0 : id + 1]), 1000)
    return () => clearInterval(timer)
  }, [item])

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



