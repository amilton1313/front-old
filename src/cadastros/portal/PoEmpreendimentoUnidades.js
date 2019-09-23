import React from 'react'
import { Link } from 'react-router-dom'

const PoEmpreendimentoUnidades = ({ nomeEmpreendimento, nomeBloco, unidades }) => {

    if (!unidades.length > 0) {
        return null
    } else {
        return (
            <div>
                {
                    unidades.map(unidade => (
                        <div className="linha-und">
                            <Link to={{
                                pathname: "/portal/poempreendimentounidadeplantas",
                                state: {
                                    nomeEmpreendimento,
                                    nomeBloco,
                                    unidade
                                }
                            }}
                                className=""
                            >{unidade.numero}</Link>
                        </div>
                    ))
                }

            </div>
        )

    }

}

export default PoEmpreendimentoUnidades