import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homecss.css';
import img1 from './img1.png';
import img2 from './img1.png';
import img3 from './img1.png';
import img4 from './img1.png';
import img5 from './img1.png';
import img6 from './img1.png';
import cartoon from './cartoon.png';

const Tutor = () => {
  return (
      <div >
          <Row>
            <Col><img src={img1} width="300" height="300" /><div>Make Extra Money</div></Col>
            <Col><img src={img2} width="300" height="300" /><div>Flexible Schedule</div></Col>
            <Col><img src={img3} width="300" height="300" /><div>Enhance you Skills</div></Col>
          </Row><Row><br></br></Row>
          <Row>
            <Col><img src={img4} width="300" height="300" /><div>Super Convinient</div></Col>
            <Col><img src={img5} width="300" height="300" /><div>Follow Your Passion</div></Col>
            <Col><img src={img6} width="300" height="300" /><div>Find Your Pursose</div></Col>
          </Row>
          <Row>
            <Col><img src={cartoon} width="1400" height="500" /></Col>
          </Row>
  </div>
  );
}

export default Tutor;