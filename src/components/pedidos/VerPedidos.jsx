import React from 'react'
import { PedidoDetalle } from './PedidoDetalle'

export const VerPedidos = () => {
  return (
    <div className='container login'>

      <div className='row'>
        <h3> Lista de pedidos </h3>
      </div>

      <div className='row'>
        <div className='col-md'>
          <PedidoDetalle />
        </div>
      </div>
    </div>
  )
}
