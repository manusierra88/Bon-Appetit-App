import React from 'react'

export const PedidoDetalle = (pedido) => {
  return (
    <div className='col-3'>
        <strong> Cliente: {pedido.nombre} </strong>
        <p>Tel: {pedido.telefono}</p>
        <p>Producto: {pedido.producto} </p>
        <p>Porciones: {pedido.cantidad}</p>
    </div>
  )
}
