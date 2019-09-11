import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clienteAxios from '../config/axios'

import { ac_obterIndicesIntranet } from '../actions/ac_indice'


const Mensagem000 = () => {

    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        dispatch(ac_obterIndicesIntranet(token))
    }, [])

    const resValor = useSelector(state => state.indicesIntranet.resValor)
    const resIndice = useSelector(state => state.indicesIntranet.resIndice)
    const comValor = useSelector(state => state.indicesIntranet.comValor)
    const comIndice = useSelector(state => state.indicesIntranet.comIndice)

    const hoje = new Date()
    const mm = (hoje.getMonth() + 1)
    const meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
    
    const aaaa = hoje.getFullYear() 
    const dataAtual = aaaa + '-' + mm + '-01'
    
    const mesAtual = meses[mm] + '/' + aaaa
    
    // const buscarIndices = () => {
    //     console.log('BUSCANDO')
    //     clienteAxios.get('/indicesintranet' )
    //         .then(res => {
    //             const aa = res.data[0].resultado[0]

    //             const bb = aa.resvalor[0]
    //             const bby = bb.indice_data_valor
    //             xComValor(bby.toLocaleString('latn'))

    //             const cc = aa.resindice[0]
    //             const ccy = cc.indice_data_valor
    //             xComIndice(ccy.toLocaleString('latn'))

    //             const dd = aa.comvalor[0]
    //             const ddy = dd.indice_data_valor
    //             xResValor(ddy.toLocaleString('latn'))

    //             const ee = aa.comindice[0]
    //             const eey = ee.indice_data_valor
    //             xResIndice(eey.toLocaleString('latn'))


    //         })
    //         .catch(err => {
    //            console.log('erro',err)
    //         })

    // }

    // useEffect(() => {
    //     buscarIndices()
    // }, [])

    

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

export default Mensagem000