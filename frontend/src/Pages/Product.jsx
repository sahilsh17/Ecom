import React from 'react'
import all_product from '../Components/Assets/all_product';
import { useParams } from 'react-router-dom';
export const Product = () => {
  const { productId } = useParams();
  const product = all_product.find((e) =>
    e.id == Number(productId))
  return (
    <div>

    </div>
  )
}
