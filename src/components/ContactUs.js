import React from 'react';
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrow from './ar.png';
import line from './line.png';
import './homecss.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Datetime from 'react-datetime';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


export default function ContactUs() {

    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [value, setValue] = useState()
    const [open, setOpen] = React.useState(false)

    var data = {
        to_email:"barinder.turkey",
        from_name:mail,
        message :message
      };


  const sen = () => {
      emailjs.send('service_5zxqe2p', 'template_2607eqo', data , 'user_0nhOQbYFrKQvGH84WriZP')
    .then((result) => {
      console.log(result.status , result.text);
    }, (error) => {
      console.log(error.text);
    });
}

   
  return (
    <div>
      <Row><Col xs={5} align="left" className="mleft">
          
  <p className='contact'>Enter your Details and we will contact you!</p>
  <Form >
  <Row>
    <Col xs={3}> <InputGroup.Text id="basic-addon3">
        Mobile Number :
      </InputGroup.Text></Col>
    <Col Col xs={6}><PhoneInput placeholder="Enter phone number" value={value} onChange={setValue}/></Col>
  </Row><Row><br></br></Row>
    <Row>
      <Col xs={3}><InputGroup.Text id="basic-addon3">
      Email address
      </InputGroup.Text></Col>
      <Col Col xs={6}> <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder='Enter Email Address'  className="smaller-input"/></Col><Col></Col>
    </Row><Row><br></br></Row>
     
    <Row>
      <Col xs={3}><InputGroup.Text id="basic-addon3">
        Subject Name
      </InputGroup.Text></Col>
      <Col Col xs={6}><FormControl id="basic-url" aria-describedby="basic-addon3" /></Col>
    </Row><Row><br></br></Row>
   
  <Row><Col xs={3}> <InputGroup.Text id="basic-addon3">
        Book Slot here - &gt;
      </InputGroup.Text></Col><Col Col xs={6}> <Datetime placeholder='book'/></Col></Row><Row><br></br></Row>
      <Row>
      <Col xs={3}><InputGroup.Text id="basic-addon3">
        Remarks :
      </InputGroup.Text></Col>
      <Col Col xs={6}><FormControl id="basic-url" aria-describedby="basic-addon3" /></Col>
    </Row>
      <Form.Text className="disclamer">
      ** Your details are safe with us. Here, on The Toppers Club, We respect your Privacy. Our subject experts will contact you personally on the Whatsapp number provided.
    </Form.Text>
</Form><Row><br></br></Row>
<Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='fullscreen'
      trigger={<Button primary>Submit</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Archive Old Messages
      </Header>
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='blue' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Ok
        </Button>
      </Modal.Actions>
    </Modal>
      </Col><Col></Col></Row>
  
        <input type="text" onChange={(e) => {
                setMail(e.target.value);
              }}  placeholder="Prove your email address"/>
              <br></br><br></br>
        <input type="textarea" onChange={(e) => {
                setMessage(e.target.value);
              }}  placeholder="Type your Message" />
        <input type="button" value="send" onClick={sen}/>
    </div>
  );
}