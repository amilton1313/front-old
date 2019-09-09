import React from 'react'

const Mensagem002 = () => {
    return ( 
        <div>

            <div className="card">
                <div className="card-body">
                    <div className="card-title mb-2">
                        <div className="card  btn-block bg-primary">
                            <span className="text-white ml-3" style={{fontSize: '1.8em', fontWeight: 'bold'}}>Aniversário</span>
                            <span className="text-white ml-3" style={{fontSize: '0.7em'}}>13/06/2019</span>
                        </div>
                        <div className="float-left mr-5">
                            <img src="img/aniv01.png" className="card-img-left mt-2 img-fluid" />
                        </div>
                        <div>
                            <p className="card-text mt-3" style={{fontSize: '1.5em'}}>
                                <span className="text-primary" style={{fontWeight: 'bold'}}>AMILTON</span>
                                <span style={{fontSize: '0.6em'}}>(TI)</span>
                                <br />
                                <span style={{fontSize: '0.8em'}}>13/junho - Quinta-feira </span>
                            </p>
                            <p className="int-parabens">P A R A B É N S ! ! !</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     )
}
 
export default Mensagem002