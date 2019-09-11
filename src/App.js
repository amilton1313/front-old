import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './config/store'
import './css/meu.css'

import Header from './cadastros/header/Header'
import Entrada from './cadastros/principal/Entrada'
import Principal from './cadastros/principal/Principal'
import PessoaDados from './cadastros/pessoa/PessoaDados'
import PessoasLista from './cadastros/pessoa/PessoasLista'
import Empreendimentos from './cadastros/empreendimentos/Empreendimentos'
import EmpreendimentosLista from './cadastros/empreendimentos/EmpreendimentosLista'
import Intranet from './intranet/Intranet'
import Erp from './erp/Erp'

function App() {
  return (
    <Router>
      <Provider store={store}>
        {/* <Header /> */}
        <div >
          <Switch>
            <Route exact path="/" component={Intranet} />
            <Route exact path="/erp" component={Entrada} />
            <Route exact path="/principal" component={Entrada} />
            <Route exact path="/pessoasLista" component={PessoasLista} />
            <Route exact path="/pessoadados" component={PessoaDados} />
            <Route exact path="/dados/editar/:id" component={PessoaDados} />

            <Route exact path="/empreendimentosLista" component={EmpreendimentosLista} />
            <Route exact path="/empreendimentos" component={Empreendimentos} />

          </Switch>
        </div>
      </Provider>

    </Router>
  );
}

export default App
