import React from 'react'
import { AppRouter } from './components/routers/AppRouter'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BonAppetit = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  )
}
