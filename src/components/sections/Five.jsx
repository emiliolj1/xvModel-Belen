import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Clipboard2Check, Clipboard2CheckFill} from 'react-bootstrap-icons';

const Five = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = '4530000800018555783723';

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Container fluid className="fiveInv">
      <div className=' text-center pb-2 pt-4'>
        <h2 className='titulo fw-bold' style={{fontSize:'2.6rem' , fontStyle: 'normal'}}>Regalos</h2>
        <p className='asistenciaFont fs-6 my-0'>Lo mas importante para mi es tu presencia,</p>
        <p className='asistenciaFont fs-6 my-0'>Regalos o dinero seran bienvenidos,</p>
        <p className='asistenciaFont fs-6 my-0'>en el salon vas a encontrar donde</p>
        <p className='asistenciaFont fs-6 mb-3'>dejar ambos o te dejo esta opcion...</p>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <Button className="cardButton fs-6 mx-auto fw-bold">
            {copied ?
              <>
                Cbu Copiado!<Clipboard2CheckFill/>
              </> 
             :
             <>
                Mi Cbu <Clipboard2Check/>
             </> 
            }
          </Button>
        </CopyToClipboard>
        <p className='asistenciaFont mt-3 fst-italic'>¡Espero no Faltes!</p>
      </div>
    </Container>
  );
};

export default Five;