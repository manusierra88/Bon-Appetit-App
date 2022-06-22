import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductos } from '../../features/productos/productoSlice';
import { Producto } from './Producto';

export const ProductosList = () => {
    const { productos } = useSelector((state) => state.producto);

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(obtenerProductos());

    }, [dispatch])
    return (
        <div className='producto-list '>
            {
                productos.map(producto =>
                    (<Producto key={producto._id} {...producto} />))
            }
        </div>

    )
}
