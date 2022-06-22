import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { verPedidos } from '../../features/pedidos/pedidoSlice';
import { PedidoDetalle } from './PedidoDetalle';


export const VerPedidos = () => {
  const dispatch = useDispatch();
  const { pedidos } = useSelector((state) => state.pedido)

  useEffect(() => {
    dispatch(verPedidos())
  }, [dispatch])
  
  return (
    <div className='container login '>
      <h3> Lista de pedidos </h3>

      <div className='row'>
        <div className='pedido-container'>
        {pedidos.map(pedido => (<PedidoDetalle key={pedido._id} {...pedido} />))}
        </div>
      </div>
        
    </div>
  )
}
