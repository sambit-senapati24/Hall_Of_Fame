import React from 'react'
import zidane from './assets/Zidane03.jpg'
function Zidane() {
    return (
        <div className="tile">
            <img className='playerPic' src={zidane} />
            <div className='playerName'>
                <h1>Zinedine Zidane</h1>
            </div>
        </div>
    )
}

export default Zidane
