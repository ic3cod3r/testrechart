import React from 'react'
import styles from './App.css'
import gear from './shipStation.png'
import Image from 'react-image-resizer'

console.log(gear)
console.log(styles)

function Gear() {
    return (
        <div className="imageContainer">
            <Image
                img src={gear} alt="ShipStation Logo" className="center"
                height={350}
                width={700}
            />
        </div>
    )
  }

export default Gear