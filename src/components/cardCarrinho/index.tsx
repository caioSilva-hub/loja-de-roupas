import React from 'react';
import Itens from '../itens';
import { cardCarrinhoStyle } from './styles';

const CardCarrinho = ({ produtos }: any) => {
  const classes = cardCarrinhoStyle()
console.log(produtos,"pororp");

  return (
    <>
      <div>
        {produtos ?(
          <>
            {produtos.map((itens:any,index:any) => {
              return (
                <div key={index} className={classes.blococar}>
                  <img className={classes.imgcar} src={itens.image} alt={itens.name} />
                  <div>
                    <p className={classes.titlecar}>{itens.name} - {itens.size}</p>
                    <p className={classes.precocar}>{itens.actual_price}</p>
                  </div>
                </div>
              )
            })}
          </>
        ):(
          <>carregando</>
        )}
      </div>

      <button className={classes.finalizar}>FINALIZAR COMPRA</button>
    </>
  )
}

export default CardCarrinho;