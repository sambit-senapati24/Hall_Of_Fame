import React from 'react'
import zlatan from './assets/Zlatan06.jpg'
function Zlatan() {
    return (
        <div className="tile">
            <img className='playerPic' src={zlatan} />
            <div className='playerName'>
                <h1>Zlatan Ibrahimovic</h1>
            </div>
        </div>
    )
}

export default Zlatan
