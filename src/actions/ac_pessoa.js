
import {
    PESSOA_DADOS_DESCARGA_INICIO,
    PESSOA_DADOS_DESCARGA_EXITO,
    PESSOA_DADOS_DESCARGA_ERRO,
    PESSOA_DADOS_FILTRADO,
    PESSOA_DADOS_INCLUIR

} from '../types/ty_pessoas_dados'

import clienteAxios from '../config/axios'

export const ac_obterPessoasDados = token => {

    return (dispatch) => {
        dispatch(ac_obterProductosComeco())

        clienteAxios.get('/pessoas', {
            headers: { Authorization: token }
        })
            .then(resposta => {
                dispatch(ac_descargaPessoasExito(resposta.data))
            })
            .catch(err => {
                dispatch(ac_descargaPessoasError())
            })
    }
}

export const ac_obterProductosComeco = error => ({
    type: PESSOA_DADOS_DESCARGA_INICIO,
    payload: error
})

export const ac_descargaPessoasExito = pessoas => ({
    type: PESSOA_DADOS_DESCARGA_EXITO,
    payload: pessoas
})

export const ac_descargaPessoasError = () => ({
    type: PESSOA_DADOS_DESCARGA_ERRO
})

export const ac_descargaPessoasFiltrado = pessoas => ({
    type: PESSOA_DADOS_FILTRADO,
    payload: pessoas
})

    export function ac_incluirPessoasDados(pessoa) {
        console.log('ac_incluirPessoasDados')
        return (dispatch) => {

            console.log('dentro ac_incluirPessoasDados')
            // dispatch(novoProduto())
    
            clienteAxios.post('/pessoa', pessoa)
                .then(resposta => {
                    console.log('sim', resposta)
                    // dispatch(agregarProductoExito(producto))
                })
                .catch(err => {
                    console.log('nao', err)
                    // dispatch(agregarProductoError())
                })
    
        }
    }

    // export const ac_incluirPessoasDados = pessoa => dispatch => {
    //     clienteAxios.post('/pessoa', pessoa)
    //         .then(resposta => {
    //             dispatch({
    //                 type: 'PESSOA_DADOS_INCLUIR',
    //                 payload: resposta.data
    //             })
    //         }
    //         )
    // }

export const incluirPessoasDados = pessoas => ({
    type: PESSOA_DADOS_INCLUIR,
    payload: pessoas
})


