import './Meals.css'
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { NavLink } from "react-router-dom";

const { Meta } = Card;
const Meals = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(products => setData(products))
  }, [])
  let drinks = data.filter(item => item.category_name == "drinks")
  let main = data.filter(item => item.category_name == "main")
  let desserts = data.filter(item => item.category_name == "dessert")


  return (

    <div className='meals'>

      <div id='meal1'>
        <h1>Drinks</h1>
        <div className='drink'>
          {drinks.map(item => {
            return <Card
              key={item.id}
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.name} description={`${item.price} manat`} />
              <NavLink to={`/${item.category_name}/${item.id}`}>Details</NavLink>

            </Card>
          })}
        </div>

      </div>


      <div id='meal1'>
        <h1>Main</h1>
        <div className='drink'>
          {main.map(item => {
            return <Card
              key={item.id}

              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.name} description={`${item.price} manat`} />
              <NavLink to={`/${item.category_name}/${item.id}`}>Details</NavLink>

            </Card>
          })}
        </div>

      </div>


      <div id='meal1'>
        <h1>Desserts</h1>
        <div className='drink'>
          {desserts.map(item => {
            return <Card
              key={item.id}

              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.name} description={`${item.price} manat`} />
              <NavLink to={`/${item.category_name}/${item.id}`}>Details</NavLink>
            </Card>
          })}
        </div>

      </div>
    </div>
  )
}

export default Meals