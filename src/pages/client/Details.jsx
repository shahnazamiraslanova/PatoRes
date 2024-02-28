import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from "react-router-dom";

const Details = () => {

  const [data, setData] = useState({})
  const { product } = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/products/${product}`)
      .then(res => res.json())
      .then(products => {
        setData(products)
        console.log(products)
      })
  }, [product])



  return (
    <div style={{ padding: "50px 200px", minHeight: "100vh" }}>

      <div style={{margin:"100px auto",width:"400px"}}>
        <img style={{ width: "400px" }} src={data.img} alt="" />
        <h2>Name: {data.name}</h2>

        <p style={{fontSize:20}}>Category: {data.category_name}</p>
        <p>Description: {data.info}</p>
        <h2>Price:{data.price}</h2>

      </div>

    </div>
  )
}

export default Details