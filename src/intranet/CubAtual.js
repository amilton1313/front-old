import React, { Fragment } from 'react'

import clienteAxios from '../config/axios'

const CubAtual = () => {

    const hoje = new Date()
    const mm = (hoje.getMonth() + 1)
    const meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
    

    const aaaa = hoje.getFullYear() 
    const dataAtual = aaaa + '-' + mm + '-01'

    const mesAtual = meses[mm] + '/' + aaaa + "XXXXX"

    const buscarIndices = () => {
        console.log('BUSCANDO')
        clienteAxios.get('/indicesintranet' )
            .then(resposta => {
                console.log('resposta', resposta)
            })
            .catch(err => {
               
            })

    }

    console.log('PRE...')
    buscarIndices()



    const resValor = 'R$ 0.000,00'
    const resPerc = '0,00%'
    const comValor = 'R$ 0.000,00'
    const comPerc = '0,00%'


    return (
        <div className="intra-card" style={{marginLeft: '10px'}}>
            <div className="cub-titulo">CUB do mês de {mesAtual} </div>
            <div className="cub-linhas">
                <div>Residencial : {resValor} - {resPerc}</div>
                <div>Comercial : {resValor} - {resPerc}</div>

            </div>
        </div>
    )
}

export default CubAtual