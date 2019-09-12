import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios'

import TelefonesLista from './TelefonesLista'

const Empreend_Telefones = ({ history }) => {

    const [contatos, xContatos] = useState([])
    const [mostrar, xMostrar] = useState(false)

    const getContatos = (nome) => {

        clienteAxios.get(`/agendatelefonica/${nome}`)
            .then(resposta => {
                xContatos(resposta.data[0])
                xMostrar(true)
                
                const contatos = resposta.data[0]
                xContatos(contatos.contatos)
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

        {console.log(contatos)}

        {
                mostrar
                ? <div  style={{marginTop: '10px', height: '250px'}}>
                    {
                        contatos
                        ? <p>xxxx</p>

                        : null


                    }
                    </div>
                : null 
                
        }

    </div>
)

        }
export default Empreend_Telefones