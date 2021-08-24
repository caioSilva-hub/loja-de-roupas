import { useState, useEffect, useMemo } from 'react'
import type { NextPage } from 'next'

import Itens from '../src/components/itens'
import Header from '../src/components/header'
import axios from 'axios'

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState<any>()
  const [g, setG] = useState<any>()
  const [busca, setBusca] = useState<string>()
  console.log(data, "data");

  useEffect(() => {
    axios
      .get(`https://projetomoda22-default-rtdb.firebaseio.com/products.json`
      )
      .then((preview) => {
        setData(preview.data);
        setG(preview.data)
      });
  }, []);

  useEffect(() => {
    const lowerBusca = busca?.toLowerCase()
    setData(g?.filter((roupa: any) =>
      roupa.name.toLowerCase().includes(lowerBusca)
    ))
  }, [busca]);

console.log(data, 'data')

  return (
    <div>
      <Header setBusca={setBusca} />
      <Itens dados={data}  />
    </div>
  )
}

export default Home
