import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Login } from '../login/Login';


import { PedidosScreen } from '../pedidos/PedidosScreen';

import { ProductosScreen } from '../products/ProductosScreen';
// import { ResgisterScreen } from '../register/ResgisterScreen';
import { Footer } from '../ui/Footer';
import { HomeScreen } from '../ui/HomeScreen';
import { Navbar } from '../ui/Navbar';

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<HomeScreen />}/>
                    <Route path='productos' element={<ProductosScreen />}/>
                    <Route path='pedidos' element={<PedidosScreen />} />

                    <Route path='/login' element={<Login />} />
                    {/* <Route path='/registro' element={ <ResgisterScreen />} /> */}
                </Routes>
            </div>
            <Footer />
        </>
    )
}
