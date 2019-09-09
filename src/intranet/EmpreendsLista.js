import React, { useState } from 'react'

import Empreend_Ramais from './Empreend_Ramais'
import Empreend_Vivaz from './Empreend_Vivaz'

const EmpreendLista = () => {

    const [tamanhoTela, xTamanhoTela] = useState(window.innerWidth)

    window.addEventListener('resize', function(){
        xTamanhoTela(window.innerWidth)
    });

    return ( 
       
        <div>
                 {/* {tamanhoTela} */}
            {
                tamanhoTela > 700
                ? <Empreend_Ramais /> 
                : null
            }
            
            <Empreend_Vivaz />
        </div>
     )
}
 
export default EmpreendLista