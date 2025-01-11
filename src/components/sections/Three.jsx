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
            src='https://i.imgur.com/bweNlA3.png'
          />
          <h3 className='fw-bold m-0 fs-4'>Capilla</h3>
          <h3 className='fw-bold mt-0 fs-4'>'Sagrado Corazon de Jesus'</h3>
          <p className='mb-2'><GeoAltFill/> B° El Paraiso - Delfín Gallo</p>
          <p className='fw-bold mb-1'>25 · Enero · 2025</p>
          <p className='fw-bold mb-1'>20:00hrs</p>
          <Button href='https://maps.app.goo.gl/tqtiP9j1AF5TzVWz8' className='mb-3 mx-auto cardButton fw-bold'>
            Ver mapa!
          </Button>
        </div>
        <div className='pt-4 pb-2 titulo text-center'>
          <h3 className='fw-bold' style={{fontSize:'2.4rem', fontStyle: 'normal'}}>¡Fiesta!</h3>
        </div>
        <div className='card cardFont mx-5 px-2 py-2 text-center'>
          <h3 className='fw-bold pt-3 fs-4'>Mi Casa!</h3>
          <p className='mb-2'><GeoAltFill/> B° Delfin Gallo - Delfín Gallo</p>
          <p className='fw-bold mb-1'>25 · Enero · 2025</p>
          <p className='fw-bold mb-1'>¡Despues de la misa!</p>
          <Button href='https://maps.app.goo.gl/vYhYnuTmSYe3z18e7' className='mb-3 mx-auto cardButton fw-bold'>
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
          <h3 className='pt-2 titulo fw-bold' style={{fontSize:'2rem', fontStyle: 'normal'}}>¡Evita ir de color rosa!</h3>
        </div>
      </Container>
    </>
  )
}

export default Three