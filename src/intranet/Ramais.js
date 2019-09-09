import React from 'react'

const Ramais = () => {
    return ( 
        <div style={cStyle}>
           <button className="btn btn-primary" style={bStyle}>Ramais</button>
        </div>
     )
}

const bStyle= {
    width: '150px',
    height: '50px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white'
}

const cStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
}
 
export default Ramais