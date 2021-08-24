import React, { useState, useEffect, useMemo } from 'react';
import { headerStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Carrinho from '../carrinho';

const Header = ({ setBusca }: any) => {
    const classes = headerStyle()
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <a className={classes.logo} href="index.html">
                    <img src="../cabide.png" alt="cabide" />
                    Projeto Modas
                </a>
                <div>
                    <input type="text" onChange={(ev) => setBusca(ev.target.value)} />
                    <FontAwesomeIcon
                        icon={faSearch}
                    />
                </div>
                <img
                    className={classes.headerCompra}
                    src="../carrinho-de-compras.png "
                    alt="teste"
                    onClick={() => setOpenModal(true)} />
            </div>

            {openModal &&
                <Carrinho setOpenModal={setOpenModal} />
            }
        </div>
    )
}

export default Header;