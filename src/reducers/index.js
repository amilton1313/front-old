import { combineReducers } from 'redux'
import re_auth from './re_auth'
import re_pessoa from './re_pessoa'
import re_empreendimento from './re_empreendimento'
import re_indice from './re_indice'

export default combineReducers({
    auth: re_auth,
    pessoas: re_pessoa,
    empreendimentos: re_empreendimento,
    indicesIntranet: re_indice
})