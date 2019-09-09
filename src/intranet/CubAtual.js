import React, { Fragment } from 'react'

const CubAtual = () => {

    const mes = 'Setembro/2019'
    const resValor = 'R$ 0.000,00'
    const resPerc = '0,00%'
    const comValor = 'R$ 0.000,00'
    const comPerc = '0,00%'

    return (
        <div className="intra-card" style={{marginLeft: '10px'}}>
            <div className="cub-titulo">CUB do mês de {mes} </div>
            <div className="cub-linhas">
                <div>Residencial : {resValor} - {resPerc}</div>
                <div>Comercial : {resValor} - {resPerc}</div>

            </div>
        </div>
    )
}

export default CubAtual