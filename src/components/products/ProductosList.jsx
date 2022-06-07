import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductos } from '../../features/productos/productoSlice';
import { Producto } from './Producto';

export const ProductosList = () => {
    const { productos } = useSelector((state) => state.producto);
    console.log(productos);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(obtenerProductos());

    }, [dispatch])
    return (
        <div className='row producto-list'>
            <div className='container'>
                <div className='row row-col-3'>

                    {productos.map(producto =>
                        (<Producto key={producto._id} {...producto} />))
                    }

                </div>
            </div>
        </div>
    )
}
