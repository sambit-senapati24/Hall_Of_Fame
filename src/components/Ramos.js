import React from 'react'
import ramos from './assets/Ramos04.jpg'
function Ramos() {
    return (
        <div className="tile">
            <img className='playerPic' src={ramos} />
            <div className='playerName'>
                <h1>Sergio Ramos</h1>
            </div>
        </div>
    )
}

export default Ramos
