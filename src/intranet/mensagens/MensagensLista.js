import React, { useState } from 'react'

import Mensagem000 from './MensagemCub'
import MensagemText from './MensagemText'
import MensagemNiver from './MensagemNiver'
import MensagemImg from './MensagemImg'
import Empreend_Telefones from '../telefones/Empreend_Telefones'

const MensagensLista = () => {

    const [tamanhoTela, xTamanhoTela] = useState(window.innerWidth)

    window.addEventListener('resize', function () {
        xTamanhoTela(window.innerWidth)
    });

    return ( 
        <div>
            <Mensagem000 />
            {
                tamanhoTela < 700
                    ? <div style={{marginLeft: '8px', width: '100%'}}>
                        <Empreend_Telefones style={{marginLeft: '10px'}}/>
                    </div>
                    : null
            }

            {/* ************************ bolinho vanessa */}
            <MensagemText
                titulo="Aniversário"
                data="27/08/2019"
                cor="steelblue"
                texto={<p class="card-text" style={{fontSize: '1.1em'}}>
                <br />
                <span style={{color: 'blue'}}>Vanessa</span>, comemorando seu aniversário, convida a
                todos para aquele tradicional 
                <span style={{color: 'green'}}>
                    <strong>
                        <em> bolinho</em>
                    </strong>
                </span>, hoje, às 16:30, no 11º andar (copa).
            </p>} />
            {/* ************************ niver vanessa */}
            <MensagemNiver
                titulo = "Aniversário"
                data = "27/08/2019"
                cor = "steelblue"
                img = "img/aniv11.png"
                nome = "VANESSA"
                local = "(Engenharia)"
                dataExt = "27/agosto - Terça-feira"
            />
            {/* ************************  niver cota */}
            <MensagemText
                titulo="Aniversário"
                data="13/08/2019"
                cor="red"
                texto={
                    <p class="card-text" style={{fontSize: '1.1em', textAlign : 'justify'}}>
                    <br />
                    Bom dia colaboradores !
                    <br />
                    <br />
                    Hoje a Cota entra no seu 45º ano de vida.
                    
                    Uma história que merece ser comemorada.
                    
                    Somos umas das poucas incorporadoras da cidade com tantos 
                    
                    anos e atuante no mercado. Vários desafios e conquistas 
                    
                    já tivemos.
                    
                    Parabéns para todos nós e obrigada por fazer parte desta história !
                    
                    Hoje às 17 horas vamos nos reunir na copa para o famoso parabéns !
                    <br />
                    <br />
                    A Diretoria
                </p>
            } />
             {/* ************************ bolinho tania */}
             <MensagemText
                titulo="Aniversário"
                data="12/08/2019"
                cor="green"
                texto={<p class="card-text" style={{fontSize: '1.1em'}}>
                <br />
                <span style={{color: 'blue'}}>Tania</span>, comemorando seu aniversário, convida a
                todos para aquele tradicional
                <span style={{color: 'green'}}>
                    <strong>
                        <em> bolinho</em>
                    </strong>
                </span>, hoje, às 16:30, no 11º andar (copa).
            </p>} />
            {/* ************************ niver tania */}
            <MensagemNiver
                titulo = "Aniversário"
                data = "12/08/2019"
                cor = "green"
                img = "img/aniv11.png"
                nome = "TANIA"
                local = "(Financeiro)"
                dataExt = "12/agosto - Segunda-feira"
            />
            {/* ************************ bolinho antonio */}
            <MensagemText
                titulo="Aniversário"
                data="07/08/2019"
                cor="steelblue"
                texto={
                    <div>
                    <p class="card-text" style={{fontSize: '1.1em'}}>
                                <br />
                                <span style={{color: 'blue'}}>Antônio</span>, que fez aniversário na última sexta-feira,
                                convida a
                                todos para comemorar com aquele tradicional
                                <span style={{color: 'green'}}>
                                    <strong>
                                        <em> bolinho</em>
                                    </strong>
                                </span>, hoje, às 16:30, no 11º andar (copa).
                            </p>
                    </div>
            } />
            {/* ************************ saida douglas */}
            <MensagemText
                titulo="Comunicado"
                data="16/07/2019"
                cor="red"
                texto={
                    <div>
                    <br />
                    <p class="card-text" style={{fontSsize: '1.5em'}}>
                    Comunicamos que o Sr. DOUGLAS FERNANDO RODRIGUES
                    não faz mais parte do nosso quadro de funcionários.
                    <br />
                    </p>
                    </div>
            } />
            {/* ************************ corpus christi */}
            <MensagemText
                titulo="Corpus Christi"
                data="18/06/2019"
                cor="grey"
                texto={
                    <div>
                    <br />
                        <p class="card-text" style={{fontSize: '1.1em'}}>
                            Em razão do feriado de Corpus Christi, quinta-feira,
                            <br />
                            não haverá expediente no dia 21/JUN/2019 - sexta-feira.
                        </p>
                    </div>
            } />

            {/* ************************ corpus christi */}
            <MensagemImg
                titulo="Confraternização de Fim de Ano"
                data="22/12/2018"
                cor="red"
                img="img/fim ano 2018 02.PNG"
                />


        </div>
     )
}
 
export default MensagensLista