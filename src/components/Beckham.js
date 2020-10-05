import React from 'react'
import beckham from './assets/Beckham02.jpg'
function Beckham() {
    return (
        <div className="tile">
            <img className='playerPic' src={beckham} />
            <div className='playerName'>
                <h1>David Beckham</h1>
            </div>
        </div>
    )
}

export default Beckham
