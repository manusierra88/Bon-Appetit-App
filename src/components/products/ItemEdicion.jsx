import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { obtenerProdcutoPorId } from '../../features/productos/productoSlice';
import { useForm } from '../../hooks/useForm';

export const ItemEdicion = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const {producto} = useSelector((state)=> state.producto)
    
    const [prod, setProd] = useState({producto})

    const [formData, handleInputchange] = useForm({
        nombre: '',
        precio: producto.precio,
        descripcion: ''
    })

    const {nombre, precio, descripcion} = formData;

    useEffect(() => {
        setProd(dispatch(obtenerProdcutoPorId(id)));

    }, [dispatch, setProd ,id]);
    
    console.log(prod)
    
    return (
        <div className='container login'>
        <div className='row'>
            <h3>Editar Producto</h3>
        </div>
        <div className='input-group mt-4 mb-4'>
            <form className='form-control login-form'
            
            >
            <p>Nombre: {producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
            <input
            className='form-control mb-4 mt-4'
            placeholder='Nombre de producto'
            autoComplete='off'
            type={'text'}
            value={nombre}
            onChange={handleInputchange}
            name='nombre'></input>
            <input
            className='form-control mb-4 mt-4'
            placeholder='Precio'
            autoComplete='off'
            type={'number'}
            min={'1'}
            value={precio}
            onChange={handleInputchange}
            name='precio'></input>
            <textarea
            className='form-control mb-4 mt-4'
            placeholder='Descripción'
            autoComplete='off'
            type={'text'}
            maxLength={'300'}
            value={descripcion}
            onChange={handleInputchange}
            name='descripcion'></textarea>

            <button className='btn btn-outline-primary btn-pedido'>Editar</button>

            </form>

        </div>

    </div>
    )
}
