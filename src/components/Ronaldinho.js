import React from 'react'
import ronaldinho from './assets/Ronaldinho06.jpg'
function Ronaldinho() {
    return (
        <div className="tile">
            <img className='playerPic' src={ronaldinho} />
            <div className='playerName'>
                <h1>Ronaldinho</h1>
            </div>
        </div>
    )
}

export default Ronaldinho
