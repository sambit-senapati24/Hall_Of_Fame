import React from 'react'
import iniesta from './assets/Iniesta03.jpg'
function Iniesta() {
    return (
        <div className="tile">
            <img className='playerPic' src={iniesta} />
            <div className='playerName'>
                <h1>Andres Iniesta</h1>
            </div>
        </div>
    )
}

export default Iniesta