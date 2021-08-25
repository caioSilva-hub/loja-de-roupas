import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { ItenStyles } from './styles';
import { typeDados } from '../../../utils/ModelTypes'
import Modal from '../modal';


const Itens = ({ dados, setOpenCart }: any) => {
    const [openModal, setOpenModal] = useState(false)
    const classes = ItenStyles()
    const [indice, setindice] = useState<number>(1)

    return (
        <>
            <div className={classes.container}>
                <div className={classes.contentCard}>
                    {dados ? (
                        <>
                            {dados.map((itens: any, index: any) => (
                                <>
                                    <div className={classes.image} onClick={() => (setOpenModal(true), setindice(index))}>
                                        {itens.image ? (
                                            <>
                                                {itens.discount_percentage &&
                                                    <div className={classes.desconto}><p>{itens.discount_percentage}</p></div>
                                                }
                                                <img src={itens.image} alt={itens.name} />
                                            </>
                                        ) : (
                                            <img src="../imagem-default.png" alt="sem imagem" />
                                        )}
                                        <div className={classes.blocotxt}>
                                            <p className={classes.txt}>{itens.name}</p>
                                            <p className={classes.txtPrice}>{itens.actual_price}</p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </>
                    ) : (
                        <p>Carregando</p>
                    )
                    }
                </div>
            </div>
            {openModal &&
                <Modal setOpenModal={setOpenModal} dados={dados} indice={indice} setOpenCart={setOpenCart} />
            }
        </>
    )
}

export default Itens;