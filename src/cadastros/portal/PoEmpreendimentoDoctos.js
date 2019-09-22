import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios'

const PoEmpreendimentoDoctos = props => {

    const [doctos, xDoctos] = useState([])
    
    const {id_empreendimento, nomeEmpreendimento} = props.location.state

    useEffect(() => {

        empDoctos()

    }, [])    

    const empDoctos = () => {

        clienteAxios.get(`/portal/empreenddoctos/${id_empreendimento}`)
            .then(resposta => {
                xDoctos(resposta.data)
            })
            .catch(err => {
            })
    }

    if (!doctos.length > 0) {
        return (
        <div>
            <h1>{nomeEmpreendimento}</h1>
            <p>Não há documentos para este empreendimento</p>
            
        </div>
        )
    } else {
        let arquivo
        
        return ( 
            <div>
                <h1>{nomeEmpreendimento}</h1>
                {
                    doctos.map(docto => {
                        arquivo = `http://www.cota.com.br/portaldocliente/arquivos/${docto.nomearquivo}`
                        return (
                        <p><a href={arquivo} target="_blank">{docto.nomedocumento}</a></p>
                    )})
                }
    
            </div>
         ) 

    }

}
 
export default PoEmpreendimentoDoctos