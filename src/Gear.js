import React from 'react'
import gear from './shipStation.png'
import Image from 'react-image-resizer'

console.log(gear)

function Gear() {
    return (
        <div>
            <Image
                img src={gear} alt="ShipStation Logo" class="center"
                height={350}
                width={700}
            />
        </div>
    )
  }

export default Gear