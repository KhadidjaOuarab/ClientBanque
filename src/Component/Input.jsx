import React from 'react'
import '../App.css'
function Input({ label,printValue ,getValue,inputVal}) {
    return (
        <div>
            <form onSubmit={printValue} className='col' >
                <h2>{label}</h2>
                <input onChange={getValue} type="text" value={inputVal}></input>
                <button type='submit'>Recharger</button>
            </form>
        </div>
    )
}

export default Input
