import React from 'react'
import styles from '../CSS/App.css'
import gear from './shipStation.png'
import Image from 'react-image-resizer'

console.log(gear)
console.log(styles)

function Gear() {  //this is the shipstation gear on the home page, this is the part where it determines where on the page it will be placed
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