import React from 'react'
import { ProductosList } from './ProductosList'

export const ProductosScreen = () => {
  return (
    <div className='producto'>
     
      <h2 className='prod-titulo'>Nuestros productos</h2>

      <ProductosList/>
    </div>
  )
}
