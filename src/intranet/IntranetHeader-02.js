import React, { Fragment } from 'react'

import '../css/headerIntranet.css'

const IntranetHeader = () => {
    return (
        <Fragment>
            <div className="header">
                {/* <label className="logo">COTA</label> */}

                <img className="logo-img" src="../../img/logo-intra.jpg" alt="" />
                <input type="checkbox" id="chk" />
                <label for="chk" className="show-menu-btn">
                    <i className="fas fa-ellipsis-h"></i>
                </label>

                <ul className="menu">
                    <a href="#">Empreendimentos

                    </a>
                    <a href="#">Administrativo</a>
                    <a href="#">Notícias</a>
                    <a href="#">Bancos</a>
                    <a href="#">Órgãos Públicos</a>
                    <a href="#">Sites Úteis</a>
                    <a href="#">Sugestões</a>
                    <label for="chk" className="hide-menu-btn">
                        <i className="fas fa-times"></i>
                    </label>
                </ul>
            </div>
        </Fragment>
    )
}

export default IntranetHeader