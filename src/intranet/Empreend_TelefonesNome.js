import React from 'react'


const Empreend_TelefonesNome = (props) => {

    console.log('22',props.contatos)
    
    if (props.contatos) {

        props.contatos.map(aa => {
            console.log('',aa.contato)
            return (
            <p>{aa.contato}</p>
        )})

    } else return null

    
    }

export default Empreend_TelefonesNome

