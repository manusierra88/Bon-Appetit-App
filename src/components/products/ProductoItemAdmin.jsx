import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


export const ProductoItemAdmin = () => {

  const {productos} = useSelector((state)=> state.producto)

  const id = useParams();

  
  

  return (
    <div>ProductoItemAdmin</div>
  )
}
