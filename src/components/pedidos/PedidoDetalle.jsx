import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { borrarPedido } from '../../features/pedidos/pedidoSlice';

export const PedidoDetalle = (pedido) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  
  

  

  
  
  return (
    <div className='pedido-detalle col-3 '>
        
        <strong className='pedido-cliente '> Cliente: {pedido.nombre} </strong>
        <p>Tel: {pedido.telefono}</p>
        <p>Email: {pedido.email}</p>
        <p>Producto: {pedido.producto} </p>
        <p>Porciones: {pedido.cantidad}</p>
        <p>Realizado:{pedido.fechaPedido}</p>
        {pedido.estado === true && <p className="text-muted">Pedido pendiente</p>}
        {pedido.estado === false && <p className="text-muted">Pedido listo para entregar</p>}
        <button 
          className='btn btn-outline btn-pedido'
          onClick={()=>{dispatch(borrarPedido(pedido._id)); navigate('/admin')}}
          >Borrar pedido</button>
    </div>
  )
}
