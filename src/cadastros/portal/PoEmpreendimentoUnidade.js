import React from 'react'
import { Link } from 'react-router-dom'

const PoEmpreendimentoUnidade = ({ nomeEmpreendimento, nomeBloco, unidades }) => {

    if (!unidades.length > 0) {
        return null
    } else {
        return (
            <div>
                {
                    unidades.map(unidade => (
                        <div>
                            <Link to={{
                                pathname: "/portal/poempreendimentounidadedoctos",
                                state: {
                                    nomeEmpreendimento,
                                    nomeBloco,
                                    unidade
                                }
                            }}
                                className="btn btn-primary"
                            >{unidade.numero}</Link>
                        </div>
                    ))
                }

            </div>
        )

    }

}

export default PoEmpreendimentoUnidade