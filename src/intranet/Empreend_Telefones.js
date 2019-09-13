import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios'

import TelefonesLista from './TelefonesLista'
import Empreend_TelefonesNome from './Empreend_TelefonesNome'

const Empreend_Telefones = ({ history }) => {

    const [telefones, xTelefones] = useState([])
    const [mostrar, xMostrar] = useState(false)

    const getContatos = (nome) => {

        clienteAxios.get(`/agendatelefonica/${nome}`)
            .then(resposta => {
                // xContatos(resposta.data[0])
                xMostrar(true)
                
                const contatos = resposta.data[0]
                xTelefones(contatos.contatos)
                // contatos.contatos.map(contato => (
                // <p>xxx{contato.nome}</p>

                // ))
            })
            .catch(err => {
                console.log(err)
            })
    }

    

return (
    
    <div>

        <div className="intra-card__ramais">

            <button 
                    onClick={() => {getContatos('AMILTON')}}
                    className="btn btn-primary " 
                    style={{ width: '100%', 
                            padding: '7px', 
                            fontSize: '20px', 
                            marginBottom: '4px',
                            fontWeigt: 'bold', 
                            marginTop: '0', 
                            justifyContent: 'flex-start' 
                            }}>Telefones
            </button>

            {/* <Link to={"/telefone"} className="btn btn-primary "
                style={{
                    width: '100%',
                    padding: '6px',
                    fontSize: '20px',
                    fontWeigt: 'bold',
                    marginTop: '0',

                    justifyContent: 'flex-start'
                }}>
                Telefones
            </Link> */}

        </div>

        {
                mostrar
                ? <div  style={{marginTop: '10px', height: '250px'}}>
                    {
                        telefones
                        ? telefones.map(pessoa => (
                            
                            <Empreend_TelefonesNome contatos={pessoa.contatos}/>

                        ))


 



                        : null


                    }
                    </div>
                : null 
                
        }

    </div>
)

        }
export default Empreend_Telefones