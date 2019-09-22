import React from 'react'

const PoEmpreendimentoUnidade = ({ arquivos }) => {

    let arquivo

    if (!arquivos.length > 0) {
        return null
    } else {
        return (
            <div>
                {
                    arquivos.map(docto => {
                        arquivo = `http://www.cota.com.br/portaldocliente/arquivos/${docto.nome_arquivo}`
                        return (
                            <p><a href={arquivo} target="_blank">{docto.descricao}</a></p>
                        )
                    })
                }
            </div>
        )
    }
}

export default PoEmpreendimentoUnidade
