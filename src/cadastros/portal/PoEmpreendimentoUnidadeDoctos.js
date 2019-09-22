import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios'

import PoEmpreendimentoUnidadeArquivos from './PoEmpreendimentoUnidadeArquivos'

const PoEmpreendimentoUnidades = props => {

    const [plantas, xPlantas] = useState([])

    const [unidades, xUnidades] = useState([])

    const { nomeEmpreendimento, nomeBloco, unidade } = props.location.state
    let dtarget

    useEffect(() => {
        console.log('unidade', unidade)
        empUnidades()

    }, [])

    const empUnidades = () => {

        clienteAxios.post(`/portal/unidadedoctos`, {
            id_empreendimento: unidade.id_empreendimento,
            id_nome_unidade: unidade.id_po_unidades_nome_unidade
        })
            .then(resposta => {
                const aa = resposta.data[0]
                xPlantas(aa.plantas)
            })
            .catch(err => {
            })
    }

    if (!plantas.length > 0) {
        return (
            <div>
                <h1>{nomeEmpreendimento}</h1>
                <p>Não há documentos para este empreendimentox</p>

            </div>
        )
    } else {
        return (
            <div>
                <h1>{nomeEmpreendimento}</h1>
                {
                    plantas.map(planta => (
                        <div id="accordion">
                            <div class="card">
                                <div class="card-header" id="headingOnee">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target={'#' + planta.id} >
                                            {planta.descricao}
                                        </button>
                                    </h5>
                                </div>

                                <div id={planta.id} class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        <PoEmpreendimentoUnidadeArquivos arquivos = {planta.arquivos} />
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