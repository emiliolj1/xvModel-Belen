import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/styles/main.css"
import { useState, useRef } from 'react';
import One from "./components/sections/One"
import Two from "./components/sections/Two"
import Three from './components/sections/Three';
import Four from './components/sections/Four';
import Five from './components/sections/Five';
import Six from './components/sections/Six';
import Footer from './components/sections/Footer';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import audioFile from './components/resources/Sabrina Carpenter - Feather.mp3'
import {PauseCircleFill, PlayCircleFill} from 'react-bootstrap-icons';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleModalClose = () => {
    setShowModal(false);
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handleAudioPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();  
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} className='mt-5 pt-5 modal-centered'>
        <Modal.Body className='mx-auto mb-0 pb-0'>
          <h3 className='titulo text-center' style={{fontSize:'2.3rem'}} >Bienvenidos</h3>
          <h3 className='titulo text-center' style={{fontSize:'2.3rem'}}>a la invitacion de</h3>
          <h3 className='titulo text-center' style={{fontSize:'3rem'}}>Ingrid</h3>
        </Modal.Body>
        <Modal.Footer className='mx-auto text-center mt-0 pt-1'>
          <Button className='cardFont cardButton mx-auto fs-4 fw-bold' onClick={handleModalClose}>
            Ingresar!
          </Button>
        </Modal.Footer>
      </Modal>
      <audio ref={audioRef} src={audioFile}/>
      <div className="music-player">
        <Button className='cardButton p-1' onClick={handleAudioPause}>
          {
            isPlaying ? 
            <PauseCircleFill className='m-0 p-0 fs-3'/>
            :
            <PlayCircleFill className='m-0 p-0 fs-3'/>
          }
        </Button>
      </div>
      <One/>
      <Two/>
      <Three/>
      <Four/>
      <Five/>
      <Six/>
      <Footer/>
    </>
  )
}

export default App
