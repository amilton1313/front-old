import React from 'react'

const Mensagem001 = () => {
    return (
        <div className="intra-card intra-flex-center">

            <div className="intra-card__barra">
                <div className="intra-card__titulo">Aniversário</div>
                <div className="intra-card__date">13/06/2019</div>
            </div>

            <div>
                <img src="img/fim de ano 2017.jpg" className="intra-img-all" />
            </div>

        </div>





    )
}

const cardStyle = {
    background: 'white',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
    margin: '15px',
    padding: '15px',
    fontSize: '1.5em',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

const corpoStyle = {
    display: 'flex',
    paddingTop: '10px'
}

export default Mensagem001
