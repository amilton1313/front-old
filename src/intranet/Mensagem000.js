import React from 'react'



const Mensagem000 = () => {

    const mes = 'Setembro/2019'
    const resValor = 'R$ 0.000,00'
    const resPerc = '0,00%'
    const comValor = 'R$ 0.000,00'
    const comPerc = '0,00%'

    return (
        <div className="intra-card intra-flex-center intra-flex-center__top0">

<div className="cub-titulo">CUB do mês de {mes} </div>
            <div className="cub-linhas">
                <div>Residencial : {resValor} - {resPerc}</div>
                <div>Comercial : {resValor} - {resPerc}</div>

            </div>
        </div>
    )
}

export default Mensagem000