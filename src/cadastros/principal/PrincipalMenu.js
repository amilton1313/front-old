import React from 'react'
import { Link } from 'react-router-dom'

const PrincipalMenu = () => {
    return (
        <div>
            <ul>
                <Link to={"/empreendimentosLista"} >
                    Empreendimentos
                </Link>

                <Link to={"/pessoasLista"} >
                    Pessoas
                </Link>
            </ul>
        </div>
    )
}

export default PrincipalMenu