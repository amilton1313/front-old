import React from 'react'

const Mensagem001 = () => {
    return (
        <div className="intra-card intra-flex-center">

            <div className="intra-card__barra">
                <div className="intra-card__titulo">Aniversário</div>
                <div className="intra-card__date">13/06/2019</div>
            </div>
            <div className="intra-body-aniv">
                <img src="img/aniv01.png" className="intra-img-small intra-body-aniv__img" />
                <div>
                    <p className="intra-body-aniv__text">
                        <span className="text-primary intra-body-aniv__nome" >AMILTON</span>
                        <span className="intra-body-aniv__local">(TI)</span>
                        <br />
                        <span className="intra-body-aniv__date">13/junho - Quinta-feira </span>
                    </p>
                    <p className="intra-body-aniv__parabens">P A R A B É N S ! ! !</p>
                </div>
            </div>
        </div>
    )
}

export default Mensagem001
