import React, { useState } from 'react'
import BarraBusqueda from '../../componentes/BarraBusqueda/BarraBusqueda'
import Cards from '../../componentes/Cards/Cards'
import { containerCard as Container } from '../../styles/style'
const ContainerCards = () => {
  let [tagList, setTagList] = useState([])
  
  
  
  return (
    <Container tagList={{setTagList}}>
      {tagList.length > 0 ? <BarraBusqueda></BarraBusqueda>: "" }
      <Cards/>
    </Container>
  )
}

export default ContainerCards