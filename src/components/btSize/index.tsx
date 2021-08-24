import React from 'react';
import { typeDados } from '../../../utils/ModelTypes';
import { ItenStyles } from './styles'

interface sizeType {
    dados: testando[]
}
interface testando {
    size: string
    available: boolean
    sku: string
}


const BtSize = ({ dados }: sizeType) => {
    const classes = ItenStyles()
    return (
        <div className={classes.content}>
            {dados.map((sizes, index) => (
                <a key={index} className={(sizes.available === true) ? classes.button :classes.buttoDisable}>
                    {sizes.size}
                </a>
            ))}
        </div>
    )
}

export default BtSize;