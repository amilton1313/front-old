import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios'

import PoEmpreendimentoUnidade from './PoEmpreendimentoUnidade'

const PoEmpreendimentoUnidades = props => {

    const [blocos, xBlocos] = useState([])

    const { id_empreendimento, nomeEmpreendimento } = props.location.state

    useEffect(() => {
        empUnidades()

    }, [])

    const empUnidades = () => {

        clienteAxios.get(`/empreendimentounidades/empreendimento/${id_empreendimento}`)
            .then(resposta => {
                const aa = resposta.data[0]
                const bb = aa.unidades[0]
                const blocos = bb.blocos

                xBlocos(blocos)
            })
            .catch(err => {
            })
    }

    if (!blocos.length > 0) {
        return (
            <div>
                <h1>{nomeEmpreendimento}</h1>
                <p>Não há documentos para este empreendimento</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>{nomeEmpreendimento}</h1>
                {
                    blocos.map(bloco => (
                        <div id="accordion">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target={'#' + bloco.nome} >
                                            {bloco.nome}
                                        </button>
                                    </h5>
                                </div>

                                <div id={bloco.nome} class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        <PoEmpreendimentoUnidade 
                                            nomeEmpreendimento = {nomeEmpreendimento}
                                            nomeBloco = {bloco.nome}
                                            unidades = {bloco.unidades} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default PoEmpreendimentoUnidades