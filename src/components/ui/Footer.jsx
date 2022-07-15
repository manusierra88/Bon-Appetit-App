import React from 'react';
import '../../styles.css';

export const Footer = () => {
  return (

    <div className='container-fluid footer'>

      <div className='row footer-row'>
        <div className='col-md col-footer'>
          <h5 className='nombre-footer'> Bon Appétit</h5>
          <p> Pastas Caseras </p>
          <strong id='copy'> 2022© </strong>
        </div>
        <div className='col-md col-footer'>
          <h5 className='h5-footer'>Contacto</h5>
          <p>Telefono:  3585610050</p>
          <a className='anchor-footer' target={'_blank'} href='https://www.instagram.com/bon__appetit.pastas/' rel='noreferrer'>
              Instagram  <i className='fa-brands fa-instagram'>
              </i>
            </a>


        </div>

      </div>

    </div>

  )
}
