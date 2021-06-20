import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homecss.css';
import img1 from './img1e.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import cartoon from './cartoon.png';

const Tutor = () => {
  return (
      <div className = "tutorback">
        <div className="tutor">
          <Row>
            <Col><img src={img1} width="200" height="200"  /><div>Make Extra Money</div></Col>
            <Col><img src={img2} width="200" height="200" /><div>Flexible Schedule</div></Col>
            <Col><img src={img3} width="200" height="200" /><div>Enhance your Skills</div></Col>
          </Row><Row><br></br></Row>
          <Row>
            <Col><img src={img4} width="250" height="250" /><div>Super Convenient</div></Col>
            <Col><img src={img5} width="250" height="250" /><div>Follow Your Passion</div></Col>
            <Col><img src={img6} width="250" height="250" /><div>Find Your Purpose</div></Col>
          </Row>
          <Row>
            <Col><img src={cartoon} width="1400" height="500" /></Col>
          </Row>
          </div>
  </div>
  );
}

export default Tutor;