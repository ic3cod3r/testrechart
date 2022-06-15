import React, { useState, useRef, useEffect } from 'react'
import '../CSS/App.css'
import ProgressBar from '../Menu Stuff/NewProgressBar'
import Sidebary from '../Menu Stuff/Sidebary'


// this is for the progress bar
export default function App() {
  const [progress, setProgress, item] = React.useState(1)
  

//math for the progress bar, it controls how fast it progresses
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 1))
    }, 100)
    return () => {
      clearInterval(timer)  //restarts the progress bar upon it reaching 100
      
    }
  }, [])

  
  //this return statement calls sidebar first, then progress bar inside of sidebar, so that it renders each time sidebar is updated, then it calls the motivation quote.
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