import React, {components, useEffect,useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrow from './ar.png';
import './homecss.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import {Divider } from 'semantic-ui-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import InputGroup from 'react-bootstrap/InputGroup'

const Home =()=> 
{ 

useEffect(() => {

}, []);

const [value, setValue] = useState()


return ( 

  <div align="left">
<Row>
  <Col xs={6}>
  <ul className='li1'>
    <li><img src={arrow} width="20" height="20" />&nbsp;&nbsp;Get 24x7 Online Help</li>
    <li><img src={arrow} width="20" height="20" />&nbsp;&nbsp;Subject expert for best guidance</li>
    <li><img src={arrow} width="20" height="20" />&nbsp;&nbsp;Get An Assured 'A' with US!</li>
  </ul>
  </Col>
  <Col> <Divider vertical></Divider></Col>
  <Col  xs={5}>

  <p className='contact'>Enter your Details and we will contact you!</p>
  <Form >
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
      Email address
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder='Enter Email Address'/>
  </InputGroup>
  
  <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>

  <Form.Group controlId="formBasicPassword">
  <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
  </Form.Group>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        Enter Subject Name
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </Col>
</Row>
</div>
)
} 
  
export default Home;