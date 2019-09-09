import React from 'react'
import { useSelector } from 'react-redux'

import Login from "../login/Login"
import LoginCpf from "../login/LoginCpf"
import Principal from "../principal/Principal"


const Entrada = () => {

    const auth = useSelector(state => state.auth.auth)
    
    return (<div>
        {auth ? (
            <div>
                <Principal />
            </div>
        ) : (
            <div>
                <Login />
            </div>
        )}
    </div>  
    )
}
 
export default Entrada


