import React from 'react'
import { Header } from 'semantic-ui-react'
import mainLogo from './2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './homecss.css';

const Banner = () => (
  <div align="left" className = "bannerback">
  <Row>
    <Col><img src={mainLogo} width="350" height="150" style={{ verticalAlign: "left"}}/></Col><Col></Col><Col></Col>
  </Row>
  </div>
)

export default Banner
