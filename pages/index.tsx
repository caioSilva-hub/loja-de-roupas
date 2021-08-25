import { useState, useEffect, useMemo } from 'react'
import type { NextPage } from 'next'

import Itens from '../src/components/itens'
import Header from '../src/components/header'
import axios from 'axios'

const Home: NextPage = () => {
  const [data, setData] = useState<any>()
  const [reference, setReference] = useState<any>()
  const [busca, setBusca] = useState<string>()
  const [openModal, setOpenModal] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    axios
      .get(`https://projetomoda22-default-rtdb.firebaseio.com/products.json`
      )
      .then((preview) => {
        setData(preview.data);
        setReference(preview.data)
      });
  }, []);

  useEffect(() => {
    const lowerBusca = busca?.toLowerCase()
    setData(reference?.filter((roupa: any) =>
      roupa.name.toLowerCase().includes(lowerBusca)
    ))
  }, [busca]);


  return (
    <div>
      <Header setBusca={setBusca} setOpenCart={setOpenCart} openCart={openCart}/>
      <Itens dados={data} openModal={openModal} setOpenCart={setOpenCart} />
    </div>
  )
}

export default Home
