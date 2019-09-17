import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios'

const MensagemCub = () => {

    const [resValor, xResValor] = useState('')
    const [resIndice, xResIndice] = useState('')
    const [comValor, xComValor] = useState('')
    const [comIndice, xComIndice] = useState('')

    useEffect(() => {

        getIndices()

    }, [])

    const getIndices = () => {

        clienteAxios.get('/indicesintranet')
            .then(resposta => {
                const a = resposta.data[0]
                const aa = a.resultado[0]

                console.log('final ', aa)

                const bb = aa.resvalor[0]
                xResValor(bb.indice_data_valor.toLocaleString('pt-BR'))

                const cc = aa.resindice[0]
                xResIndice(cc.indice_data_valor.toLocaleString('pt-BR'))

                const dd = aa.comvalor[0]
                xComValor(dd.indice_data_valor.toLocaleString('pt-BR'))

                const ee = aa.comindice[0]
                xComIndice(ee.indice_data_valor.toLocaleString('pt-BR'))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const hoje = new Date()
    const mm = (hoje.getMonth() + 1)
    const meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    const aaaa = hoje.getFullYear()
    const dataAtual = aaaa + '-' + mm + '-01'

    const mesAtual = meses[mm] + '/' + aaaa

    return (
        <div className="intra-card intra-flex-center intra-flex-center__top0">
            <div className="cub-titulo">CUB do mês de {mesAtual} </div>
            <div className="cub-linhas">

                <div>Residencial : R$ {resValor} - {resIndice} %</div>
                <div>Comercial : R$ {comValor} - {comIndice} %</div>

            </div>
        </div>
    )
}

export default MensagemCub