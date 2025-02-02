import React from 'react'
import Container from 'react-bootstrap/Container'

const Six = () => {
  return (
    <Container fluid className='sectionM sixInv d-flex flex-column'>
      <div className='fraseEnd fs-6 text-center mt-auto mb-1 mx-5'>
        <p className='mb-0'>Hoy comienza un capítulo nuevo lleno de alegría y esperanza. </p>
        <p className='mb-0'>Gracias por acompañarme en este día tan especial</p>
        {/* <p className='mb-0'>merecen ser compartidos...</p> */}
        <p className='titulo mt-2' style={{fontSize:'2.5rem'}}>Belén</p>
      </div>
    </Container>
  )
}

export default Six