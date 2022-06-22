import React from 'react'

import foto1 from '../../assets/foto1.jpg'
import foto2 from '../../assets/foto2.jpg'
import foto3 from '../../assets/foto3.jpg'


export const HomeScreen = () => {

  return (
    <div className='home-container'>

      <div className='row home-title'>
        <h1 className='home-h1'>Bon Appétit</h1>
        <h3 className='home-h3'>PASTAS CASERAS</h3>
      </div>

      <hr />

      <div className='row home-contenido'>
        <div className=' col'>
          <h4 className='h4-contenido'> Quienes Somos</h4>
          <p className='p-contenido'>Somos un emprendimiento familiar dedicado a la elaboracion de pastas frsecas,
            utilizando insumos e ingredientes frescos, para garantizar que nuestro producto
            sea de la mas alta calidad.
          </p>
        </div>
        <div className='col'>
          <img className='img-home' src={foto1} alt='foto pasta' />
        </div>
      </div>

      <div className='row home-contenido'>
        <div className='col'>
          <img className='img-home' src={foto2} alt='foto pasta'/>
        </div>
        <div className='col'>
          <h4 className='h4-contenido'> Ingredientes frescos </h4>
          <p className='p-contenido'>Usamos los ingredientes más frescos para asegurar que la calidad sea de excelencia
          y el sabor sea inigualable </p>
        </div>
      </div>

      <hr/>
      <div className='row home-contenido'>
        <div className='col'>
          <h4 className='h4-contenido'>
            Hacé tú pedido desde la página
          </h4>
          <p className='p-contenido'>
            En la sección 'Pedidos' podes encargar la pasta que más te guste, completa el formulario con los 
            datos indicados y en cuanto antes nos pondremos en contacto para confirmar que tú pedido está listo
          </p>
        </div>
        <div className='col'>
          <img className='img-home' src={foto3} alt='foto-pasta'/>
        </div>
      </div>


    </div>
  )
}
