import React, {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import BtSize from '../btSize';
import { ModalStyles } from './style';


const Modal= ({setOpenModal, dados,indice, setOpenCart}:any) => {
    const classes = ModalStyles()

    const [size, setSize] = useState<any>()
    const addCheckout = (dados:any) => {
        axios.post(`https://projetomoda22-default-rtdb.firebaseio.com/checkout.json`, 
            {
            actual_price: `${dados.actual_price}`,
            image: `${dados.image}`,
            name: `${dados.name}`,
            size: `${size}`
            }
        ).then(res => {
            setOpenModal(false)
            setOpenCart(true)
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
                <BtSize dados={dados[indice].sizes} setSize={setSize} size={size} />
                <button className={classes.addcar} onClick={() => addCheckout(dados[indice])}>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Modal;