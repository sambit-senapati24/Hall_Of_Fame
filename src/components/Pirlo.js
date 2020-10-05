import React from 'react'
import xavi from './assets/Pirlo02.jpg'
function Pirlo() {
    return (
        <div className="tile">
            <img className='playerPic' src={xavi} />
            <div className='playerName'>
                <h1>Andrea Pirlo</h1>
            </div>
        </div>
    )
}

export default Pirlo
