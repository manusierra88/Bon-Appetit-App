import React from 'react'
import { useForm } from '../../hooks/useForm'

export const ResgisterScreen = () => {
    const onSubmit = () => { }
    const [registerValues, handleInputchange] = useForm({
        nombre: '',
        email: '',
        password: ''
    })
    const { nombre, email, password } = registerValues;
    return (
        <div className='container login'>
            <div className='row'>
                <h3>Iniciar Sesión</h3>
            </div>
            <div className='input-group mb-4 mt-4'>
                <form
                    onSubmit={onSubmit}
                    className='form-control login-form'>
                    <input
                        className='form-control mb-4 mt-4'
                        placeholder='Nombre'
                        autoComplete='off'
                        type={'text'}
                        value={nombre}
                        onChange={handleInputchange}
                        name='email'></input>
                    <input
                        className='form-control mb-4 mt-4'
                        placeholder='Email'
                        autoComplete='off'
                        type={'email'}
                        value={email}
                        onChange={handleInputchange}
                        name='email'></input>
                    <input
                        className='form-control mb-4'
                        type={'password'}
                        name='password'
                        value={password}
                        onChange={handleInputchange}
                        placeholder='Contraseña'></input>
                    <button className='btn btn-outline-info btn-pedido'>Ingresar</button>

                </form>
            </div>
        </div>
    )
}
