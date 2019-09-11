import React, { Fragment } from 'react'

import '../css/headerIntranet.css'

const IntranetHeader = () => {

    const meuToggle = (elemento) => {
        const abc = document.getElementsByClassName("fechar")
        console.log('classes ', abc)
        if (document.getElementById(elemento).style.display == 'block') {
            document.getElementById(elemento).style.display = 'none'
        }
        else {
            document.getElementById(elemento).style.display = 'block'
        }
    }

    return (
        <Fragment>
            <div class="accordion" id="accordionExample">

                <div>
                    <button class="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne">
                        aaaaaa
                </button>

                    <div id="collapseOne"
                        class="collapse show"
                        data-parent="#accordionExample">

                        Anim pariatur cliche reprehenderit, enim eiusmod high
                         life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch. 
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3 
                          wolf moon tempor, sunt aliqua put a bird on it squid 
                          single-origin coffee nulla assumenda shoreditch et.
                           Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

                </div>
                </div>

                <div>
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Collapsible Group Item #2
                            </button>

                    <div
                        id="collapseTwo"
                        class="collapse"
                        data-parent="#accordionExample">

                        Anim pariatur cliche reprehenderit, 
                        enim eiusmod high life accusamus terry richardson ad squid. 3 
                        wolf moon officia aute, non cupidatat skateboard dolor brunch.
                         Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf 
                         moon tempor, sunt aliqua put a bird on it squid single-origin
                          coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                           helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                             Leggings occaecat craft beer farm-to-table, raw denim 
                             aesthetic synth nesciunt you probably haven't heard of
                              them accusamus labore sustainable VHS.
    
                    </div>
                </div>

                <div>
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Collapsible Group Item #3
                            </button>

                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">

                        Anim pariatur cliche reprehenderit, enim eiusmod high 
                        life accusamus terry richardson ad squid. 3 wolf moon
                         officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 
                          3 wolf moon tempor, sunt aliqua put a bird on it squid
                           single-origin coffee nulla assumenda shoreditch et.
                            Nihil anim keffiyeh helvetica, craft beer labore 
                            wes anderson cred nesciunt sapiente ea proident.
                             Ad vegan excepteur butcher vice lomo. Leggings
                              occaecat craft beer farm-to-table, raw denim 
                              aesthetic synth nesciunt you probably haven't 
                              heard of them accusamus labore sustainable VHS.

                    </div>
                </div>













            </div>

            <header>
                <input type="checkbox" id="btn-menu" />
                <label for="btn-menu" class="icon-menu"><i className="fas fa-ellipsis-h"></i></label>
                <nav class="menu">

                    <ul>
                        <li
                            onClick={() => meuToggle('mn_Empreendimentos')}
                        ><a href="#">Empreendimentos<span class="icon-down-open"
                        >v</span></a>
                            <ul id="mn_Empreendimentos" class="fechar">
                                <li><a href="#">America Officenter</a></li>
                                <li><a href="#">City Office Square</a></li>
                                <li><a href="#">Green Village Residence</a></li>
                                <li><a href="#">Horizonte Novo Estreito</a></li>
                                <li><a href="#">Max & Flora Center</a></li>
                                <li><a href="#">Paço Imperial</a></li>
                                <li><a href="#">Porto Atlântico</a></li>
                                <li><a href="#">Porto Mare Residence</a></li>
                                <li><a href="#">Punta Blu Mall Boutique</a></li>
                                <li><a href="#">Punta Blu Residence</a></li>
                                <li><a href="#">Solar de Gaia</a></li>
                                <li><a href="#">Solar dos Plátanos</a></li>
                                <li><a href="#">Sun Village Residence</a></li>
                                <li><a href="#">The Office Avenida</a></li>
                                <li><a href="#">The Office Business Center</a></li>
                                <li><a href="#">Urban Classic</a></li>
                                <li><a href="#">Vivaz Condomínio Jardim</a></li>
                            </ul>

                        </li>
                        <li class="submenu"
                            onClick={() => meuToggle('mn_administrativo')}
                        ><a href="#">Administrativo<span class="icon-down-open"
                        ></span></a>
                            <ul id="mn_administrativo" class="fechar">
                                <li><a href="#" target="_blank">Organograma</a></li>
                                <li><a href="#" target="_blank">Manual de Funções</a></li>
                                <li><a href="#" target="_blank">Normas Internas</a></li>
                            </ul>
                        </li>
                        <li onClick={() => meuToggle('mn_noticias')}><a href="#">Notícias<span class="icon-down-open"></span></a>
                            <ul id="mn_noticias">
                                <li><a href="https://www.globo.com" target="_blank">Globo</a></li>
                                <li><a href="https://oglobo.globo.com" target="_blank">Jornal O Globo</a></li>
                                <li><a href="https://www.folha.uol.com.br" target="_blank">Folha de São Paulo</a></li>
                                <li><a href="http://www.estadao.com.br" target="_blank">Jornal Estado de São Paulo</a></li>
                                <li><a href="https://veja.abril.com.br" target="_blank">Revista Veja</a></li>
                                <li><a href="https://epoca.globo.com" target="_blank">Revista Época</a></li>
                                <li><a href="https://istoe.com.br" target="_blank">Revisa Isto É</a></li>
                                <li><a href="https://www.nsctotal.com.br/dc" target="_blank">NSC Total</a></li>
                                <li><a href="https://ndmais.com.br" target="_blank">Notícias do Dia</a></li>
                                <li><a href="http://www.valor.com.br" target="_blank">Valor Econômico</a></li>
                                <li><a href="https://epocanegocios.globo.com" target="_blank">Época Negócios</a></li>
                                <li><a href="https://exame.abril.com.br" target="_blank">Revista Exame</a></li>
                                <li><a href="https://www.terra.com.br" target="_blank">Terra</a></li>
                                <li><a href="https://www.uol.com.br" target="_blank">UOL</a></li>
                            </ul>
                        </li>
                        <li onClick={() => meuToggle('mn_bancos')}><a href="#">Bancos<span class="icon-down-open"></span></a>
                            <ul id="mn_bancos">
                                <li><a href="http://www.bradesco.com.br" target="_blank">Bradesco</a></li>
                                <li><a href="http://www.bb.com.br" target="_blank">Banco do Brasil</a></li>
                                <li><a href="file:///C:/BancoBrasil/officeIE/index.html" target="_blank">Brasil - Office</a></li>
                                <li><a href="http://www.caixa.gov.br" target="_blank">CEF</a></li>
                                <li><a href="https://www.secureweb.com.br" target="_blank">Real</a></li>
                                <li><a href="http://www.safraempresas.com.br" target="_blank">Safra</a></li>
                                <li><a href="http://www.santander.com.br" target="_blank">Santander</a></li>
                                <li><a href="http://www.credicard.com.br/home/default.htm" target="_blank">Credicard</a></li>
                                <li><a href="http://www.itau.com.br/empresas" target="_blank">Itau</a></li>
                                <li><a href="http://www.bancointer.com.br" target="_blank">Inter</a></li>
                            </ul>
                        </li>
                        <li onClick={() => meuToggle('mn_orgaospublicos')}><a href="#">Órgãos Públicos<span class="icon-down-open"></span></a>
                            <ul id="mn_orgaospublicos">
                                <li><a href="http://www.presidencia.gov.br" target="_blank">Presidência - Planalto</a></li>
                                <li><a href="http://www.jfsc.gov.br" target="_blank">Tribunal de Justiça Federal - SC</a></li>
                                <li><a href="http://www.tj.sc.gov.br" target="_blank">Tribunal de Justiça - SC</a></li>
                                <li><a href="http://www.receita.fazenda.gov.br" target="_blank">Receita Federal</a></li>
                                <li><a href="http://www.previdenciasocial.gov.br" target="_blank">Previdência Social</a></li>
                                <li><a href="http://www.sef.sc.gov.br" target="_blank">Fazenda Estadual</a></li>
                                <li><a href="http://www.jucesc.sc.gov.br" target="_blank">Junta Comercial de SC</a></li>
                                <li><a href="http://www.pmf.sc.gov.br" target="_blank">Prefeitura Mun. Florianópolis</a></li>
                                <li><a href="http://sefinnet.pmf.sc.gov.br" target="_blank">Fazenda Municipal</a></li>
                                <li><a href="http://www.sinduscon-fpolis.org.br" target="_blank">Sinduscon - Fpolis</a></li>
                                <li><a href="http://www.connectsa.com.br" target="_blank">SPC</a></li>
                            </ul>
                        </li>
                        <li onClick={() => meuToggle('mn_sitesuteis')}><a href="#">Sites Úteis<span class="icon-down-open"></span></a>
                            <ul id="mn_sitesuteis">
                                <li><a href="http://www.buscacep.correios.com.br" target="_blank">CEP</a></li>
                                <li><a href="http://www.cota.com.br" target="_blank">COTA</a></li>
                                <li><a href="http://www.crea-sc.org.br" target="_blank">CREA</a></li>
                                <li><a href="http://www.google.com.br" target="_blank">Google</a></li>
                                <li><a href="http://www.horariodebrasilia.org" target="_blank">Horário Oficial do Brasil</a></li>
                            </ul>
                        </li>


                        <li><a href="#">Sugestões</a></li>
                    </ul>
                </nav>
            </header>

        </Fragment>
    )
}

export default IntranetHeader

        //https://www.youtube.com/watch?v=TLEwZZlB6Bs recovery senha
//https://www.youtube.com/watch?v=TLEwZZlB6Bs menu accordion