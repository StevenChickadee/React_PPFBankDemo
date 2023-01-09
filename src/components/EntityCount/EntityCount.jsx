//Imports
//CSS
import './EntityCount.css'

//Libraries
import React from 'react'

function EntityCount({ list }) {
    return (
        <div className='entityCountWrapper'>Zobrazeno položek: {list.length}</div>
    )
}

export default EntityCount