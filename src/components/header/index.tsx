import React, { useState, useEffect, useMemo } from 'react';
import { headerStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Carrinho from '../carrinho';

const Header = ({ setBusca, setOpenCart, openCart }: any) => {
    const classes = headerStyle()

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <a className={classes.logo} href="index">
                    <img src="../cabide.png" alt="cabide" />
                    Projeto Modas
                </a>
                <div className={classes.input}>
                    <input  type="text" onChange={(ev) => setBusca(ev.target.value)} placeholder="Digite sua pesquisa"/>
                    <FontAwesomeIcon
                        icon={faSearch}
                        style={{marginLeft:"5px"}}
                    />
                </div>
                <img
                    className={classes.headerCompra}
                    src="../carrinho-de-compras.png "
                    alt="teste"
                    onClick={() => setOpenCart(true)} />
            </div>

            {openCart &&
                <Carrinho setOpenCart={setOpenCart} />
            }
        </div>
    )
}

export default Header;