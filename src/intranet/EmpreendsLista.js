import React, { useState, Fragment } from 'react'

import Empreend_Ramais from './Empreend_Ramais'
import Empreend_Telefones from './Empreend_Telefones'
import Empreend_Vivaz from './Empreend_Vivaz'

const EmpreendLista = ({ history }) => {

    const [tamanhoTela, xTamanhoTela] = useState(window.innerWidth)

    window.addEventListener('resize', function () {
        xTamanhoTela(window.innerWidth)
    });

    return (

        <div>
            {/* {tamanhoTela} */}
            {
                tamanhoTela > 700
                    ?
                    <Fragment>
                        <Empreend_Ramais />
                        <Empreend_Telefones />
                    </Fragment>
                    : null
            }

            <Empreend_Vivaz />
        </div>
    )
}

export default EmpreendLista