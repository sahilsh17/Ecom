import React from 'react';
import './popular.css';
import data_product from '../Assets/data';
import Item from '../Items/Item';

export const Popular = () => {
  return (
    <div className="popular">
      <h1> POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item) => {
          return <Item key />
        })}
      </div>
    </div>
  )
}
