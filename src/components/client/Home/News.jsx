import React from 'react';
import { Card } from 'antd';
import { NavLink } from "react-router-dom";
import "./News.css"

const { Meta } = Card;
const App = () => (
 <div className='cards'> 
   <Card
    hoverable
    style={{
      width: "30%",
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg.webp" />}
  >
    <Meta  description="Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros." />
    <NavLink to="blog">Continue Reading→</NavLink>

  </Card>
  <Card
    hoverable
    style={{
      width: "30%",
    }}
    cover={
    
    <img alt="example" src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg.webp" />}
  >
    <Meta  description="Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros." />
    <NavLink to="blog">Continue Reading→</NavLink>

  </Card>
  <Card
    hoverable
    style={{
      width: "30%",
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg.webp" />}
  >
    <Meta  description="Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros." />
    <NavLink to="blog">Continue Reading→</NavLink>

  </Card>
 </div>
);
export default App;