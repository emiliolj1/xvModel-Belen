import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { GeoAltFill } from 'react-bootstrap-icons'

const Three = () => {
  return (
    <>
      <Container fluid className='threeInv pb-4'>
        <div className='pt-4 pb-3 titulo text-center'>
          <h3 className='fw-bold' style={{fontSize:'2.4rem', fontStyle: 'normal'}} translate="no">¡Misa!</h3>
        </div>
        <div className='card cardFont mx-5 px-3 py-3 text-center'>
          <Image
            className='rounded-4 p-3'
            src='https://i.imgur.com/q26FauV.jpeg'
          />
          <h3 className='fw-bold m-0 fs-4'>Parroquia</h3>
          <h3 className='fw-bold mt-0 fs-4'>'Nstra. Sra. del Valle' </h3>
          <p className='mb-2'><GeoAltFill/> Av. Torquinst - La Florida</p>
          <p className='fw-bold mb-1'>3 · Noviembre · 2024</p>
          <p className='fw-bold mb-1'>19:30hrs</p>
          <Button href='https://maps.app.goo.gl/9KzMrta4uDznnu4f8' className='mb-3 mx-auto cardButton fw-bold'>
            Ver mapa!
          </Button>
        </div>
        <div className='pt-4 pb-2 titulo text-center'>
          <h3 className='fw-bold' style={{fontSize:'2.4rem', fontStyle: 'normal'}}>¡Fiesta!</h3>
        </div>
        <div className='card cardFont mx-5 px-2 py-2 text-center'>
          <h3 className='fw-bold pt-3 fs-4'>Salon Coyote</h3>
          <p className='mb-2'><GeoAltFill/> Av. M. T. Alvear - Delfín Gallo</p>
          <p className='fw-bold mb-1'>15 · Noviembre · 2024</p>
          <p className='fw-bold mb-1'>22:00hrs</p>
          <p className='fw-bold mb-2'>¡Sé puntual!</p>
          <Button href='https://maps.app.goo.gl/22Ygrp85hBdgkP2j8' className='mb-3 mx-auto cardButton fw-bold'>
            Ver mapa!
          </Button>
        </div>
      </Container>
      <Container className='threeTwoInv pb-2'>
        <div className='pt-4 titulo text-center'>
          <h3 className='fw-bold' style={{fontSize:'2.5rem', fontStyle: 'normal'}}>Dress Code</h3>
        </div>
        <div className='text-center'>
          <Image
            src='https://i.imgur.com/HvkvJP2.png'
            width='350rem'
          />
          <h3 className='pt-1 cardFont fw-semibold' style={{fontSize:'1.3rem', fontStyle: 'normal'}}>Elegante Sport</h3>
          <h3 className='pt-2 titulo fw-bold' style={{fontSize:'2rem', fontStyle: 'normal'}}>¡Evita ir de color verde!</h3>
        </div>
      </Container>
    </>
  )
}

export default Three