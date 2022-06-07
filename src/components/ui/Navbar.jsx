import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles.css';

import logo from '../../assets/logo.jpeg'
import { useSelector } from 'react-redux';



export const Navbar = () => {
    const { user } = useSelector(
        (state) => state.auth)

    useEffect(()=>{}, [user])

    return (
        <nav className="navbar navbar-expand-lg Navbar mb-5 ">
            <div className="container-fluid">
                <a className='navbar-brand' href='/'>
                    <img className='nav-logo' src={logo} alt='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`} to={'/'}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/productos'}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/pedidos'}>Pedidos</NavLink>
                        </li>
                        {
                            user && <li>
                                <NavLink className="nav-link" to={'/admin'} >Admin</NavLink>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}
