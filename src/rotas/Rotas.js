import React from 'react'
import { Route, Switch } from 'react-router-dom'

import TelefonesLista from '../intranet/telefones/TelefonesLista'
import Header from '../cadastros/header/Header'
import Entrada from '../cadastros/principal/Entrada'
import Principal from '../cadastros/principal/Principal'
import PessoaDados from '../cadastros/pessoa/PessoaDados'
// import PessoaDados_I from '../cadastros/pessoa/PessoaDados_I'
import PessoaDados_A from '../cadastros/pessoa/PessoaDados_A'
import PessoasLista from '../cadastros/pessoa/PessoasLista'
import Empreendimentos from '../cadastros/empreendimentos/Empreendimentos'
import EmpreendimentosLista from '../cadastros/empreendimentos/EmpreendimentosLista'
import Intranet from '../intranet/Intranet'
import Erp from '../erp/Erp'

const Rotas = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Intranet} />
        <Route exact path="/telefone" component={TelefonesLista} />
        <Route exact path="/erp" component={Entrada} />
        <Route exact path="/principal" component={Entrada} />
        <Route exact path="/pessoasLista" component={PessoasLista} />
        <Route exact path="/pessoadados" component={PessoaDados} />
        {/* <Route exact path="/pessoadados_I" component={PessoaDados_I} /> */}
        <Route exact path="/pessoadados_A" component={PessoaDados_A} />
        <Route exact path="/dados/editar/:id" component={PessoaDados} />
        <Route exact path="/empreendimentosLista" component={EmpreendimentosLista} />
        <Route exact path="/empreendimentos" component={Empreendimentos} />

      </Switch>
    </div>
  )
}

export default Rotas