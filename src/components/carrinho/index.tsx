import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { carrinhoStyle } from './styles';
import axios from 'axios';
import CardCarrinho from '../cardCarrinho';

const Carrinho = ({ setOpenCart }: any) => {
    const classes = carrinhoStyle()
    const [cardData, setCardData] = useState<any>()
    const [produtos, setProdutos] = useState<any>()
    console.log(produtos, "produtosprodutosprodutos");
    console.log(cardData, "dataaaaa");



    useEffect(() => {
        axios.get("https://projetomoda22-default-rtdb.firebaseio.com/checkout.json"
        ).then((preview) => {
            setProdutos(Object.entries(preview.data));
        });
    }, []);

    useEffect(() => {
        if (produtos) {
            const newArray = produtos.map((item: any) => item[1])
            setCardData(newArray.filter((item: any) => item !== 'lock'))
        }
    }, [produtos]);

    return (
        <div className={classes.modalCompras}>
            <div className={classes.tittle}>
                <FontAwesomeIcon
                    color="#ebab8f"
                    icon={faTimesCircle}
                    size="2x"
                    onClick={() => setOpenCart(false)}
                    className={classes.closeModal}
                />
                <p>carrinho</p>
            </div>
            {(cardData?.length > 0) ? (
                <>
                    <CardCarrinho produtos={cardData} />
                </>
            ) : (
                <>
                    <p style={{color:"#ebab8f"}}>Carrinho Vazio</p>
                    <img className={classes.imgCarVazio}
                        src="../carrinho-vazio.svg"
                        alt="carrinho-vazio"
                    />
                </>
            )}
        </div>
    )
}

export default Carrinho;