import React from 'react'
import NeymarJr from './assets/Neymar05.jpg'
function Neymar() {
    return (
        <div className="tile">
            <img className='playerPic' src={NeymarJr} />
            <div className='playerName'>
                <h1>Neymar Jr.</h1>
            </div>
        </div>
    )
}

export default Neymar
