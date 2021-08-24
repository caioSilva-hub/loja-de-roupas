import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import BtSize from '../btSize';
import { ModalStyles } from './style';


const Modal= ({setOpenModal, dados,indice}:any) => {
    const classes = ModalStyles()
    
    const checkoutObj={
        actual_price: "R$ 220,90",
        image: "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
        name: "VESTIDO TRANSPASSE BOW",
        size: "PP"
    }

    const addCheckout = () => {
        axios.post(`https://projetomoda22-default-rtdb.firebaseio.com/checkout.json`, 
            {
            actual_price: `${checkoutObj.actual_price}`,
            image: `${checkoutObj.image}`,
            name: `${checkoutObj.name}`,
            size: `${checkoutObj.size}`
            }
        ).then(res => {
            console.log(res);
        })
    }
  return (
    <div className={classes.modal}>
    <div className={classes.modalInterno}>
        <FontAwesomeIcon
            color="#ebab8f"
            icon={faTimesCircle}
            size="2x"
            onClick={() => setOpenModal(false)}
            className={classes.closeModal}
        />
        <div className={classes.modalContent}>
            <div className={classes.divImageModal}>
                <div className={classes.desconto}><p>10%</p></div>
                <img src={dados[indice].image} alt={dados[indice].name} />
            </div>
            <div className={classes.divInfoModal}>
                <p className={classes.titulo}>{dados[indice].name}</p>
                <p className={classes.preco}>{dados[indice].regular_price}</p>
                <p className={classes.vezes}> em até <span>{dados[indice].installments}</span> </p>
                <p className={classes.tamanho}>Escolha o tamanho</p>
                <BtSize dados={dados[indice].sizes} />
                <button className={classes.addcar} onClick={() => addCheckout()}>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Modal;