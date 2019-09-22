import React from 'react'
import { Link } from 'react-router-dom'

const PrincipalMenu = () => {
    return (
        <div>
            <ul>
                <Link to={"/portal/poempreendimentoslista"} >
                    Empreendimentos
                </Link>

                <Link to={"/pessoa/pessoasLista"} >
                    Pessoas
                </Link>
            </ul>
        </div>
    )
}

export default PrincipalMenu