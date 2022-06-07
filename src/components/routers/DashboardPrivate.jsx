import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminScreen } from '../admin/AdminScreen'
import { VerPedidos } from '../pedidos/VerPedidos'
import { ProductoAdmin } from '../products/ProductoAdmin'
import { ProductoScreenCreate } from '../products/ProductoScreenCreate'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'

export const DashboardPrivate = () => {
    return (
        <>

            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<AdminScreen />} />
                    <Route path='/producto' element={<ProductoScreenCreate />} />
                    <Route path='/pedido' element={<VerPedidos />} />
                    <Route path='/producto/detalle' element={<ProductoAdmin />}/>
                </Routes>
            </div>
            <Footer/>


        </>
    )
}
