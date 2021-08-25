import React from 'react';
import { typeDados } from '../../../utils/ModelTypes';
import { ItenStyles } from './styles'

interface sizeType {
    dados: testando[],
    setSize: any;
    size: any;
}
interface testando {
    size: string
    available: boolean
    sku: string

}


const BtSize = ({ dados, setSize, size }: sizeType) => {
    const classes = ItenStyles()
    return (
        <div className={classes.content}>
            {dados.map((sizes, index) => (
                <a key={index} onClick={() => setSize(sizes.size)} className={sizes.available ? sizes.size === size ? classes.active : classes.button : classes.buttoDisable}>
                    {sizes.size}
                </a>
            ))}
        </div>
    )
}

export default BtSize;