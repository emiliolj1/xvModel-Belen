import React from 'react'
import { Container, Image, Button } from 'react-bootstrap'
import Carrousel from '../layout/Carrousel'

const Four = () => {
  return (
    <>
      <Container fluid className='fourInv py-4 text-center'>
        {/* <h3 className='pb-3 text-decoration-underline text-center titulo' style={{'color':"var(--skyBlue)"}}>Mis fotos!</h3>
        <Carrousel/> */}
        <div className='text-center pb-4 pt-4'>
          <h2 className='titulo fw-bold' style={{fontSize:'2.6rem', fontStyle: 'normal'}} >Asistencia</h2>
          <p className='asistenciaFont fs-6 my-0'>Quiero contar contigo, ¿vienes?</p>
          <p className='asistenciaFont fs-6 my-0'>Confírmame, por favor.</p>
          <Button href='https://wa.me/543816364212?text=Hola%20Adriana,%20confirmo%20mi%20presencia.%20Soy%20[tu nombre]' className='my-3 mx-auto asisButton fw-bold'>
            Confirmar Presencia!
          </Button>
        </div>
      </Container>
    </>
  )
}

export default Four