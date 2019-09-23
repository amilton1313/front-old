import React from 'react'
import { Link } from 'react-router-dom'

const PrincipalMenu = () => {
    return (
        <div className="pri-menu">
                <Link to={"/portal/poempreendimentoslista"} >
                    Empreendimentos
                </Link>

                <Link to={"/pessoa/pessoasLista"} >
                    Pessoas
                </Link>
        </div>
    )
}

export default PrincipalMenu