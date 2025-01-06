import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Carrousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image className='carrousel' src=' '/>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carrousel;