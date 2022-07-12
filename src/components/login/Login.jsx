import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, reset } from '../../features/auth/authSlice';
import '../../styles.css';


export const Login = () => {



  const [loginValues, handleInputchange] = useForm({
    email: '',
    password: ''
  });


  const { email, password } = loginValues;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user,
    isLoading,
    isError,
    isSuccess,
    message } = useSelector(
      (state)=> state.auth);

  useEffect(()=>{
    if(isError){
      return <h3> {message}</h3>
    }

    if(isSuccess || user){
        navigate('/admin',{replace:true})
    }

    dispatch(reset())
  },[user, isError, message,isSuccess,dispatch,navigate])

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }

    dispatch(loginUser(userData));
  

  }

  if(isLoading){
    return <h2> Loading </h2>
  }

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