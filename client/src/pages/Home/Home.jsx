import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ViewItems from '../../components/ViewItems/ViewItems'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import AppDownLoad from '../../components/AppDownload/AppDownLoad'

const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ViewItems category={category} setCategory={setCategory} />
      <ProductDisplay category={category}/>
      <AppDownLoad/>
    </div>
  )
}

export default Home
