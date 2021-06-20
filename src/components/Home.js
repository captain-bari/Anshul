import React, {components, useEffect,useState} from "react";
import Container from 'react-bootstrap/Container';
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
const Home =()=> 
{ 

useEffect(() => {

}, []);

const [value, setValue] = useState()
const [open, setOpen] = React.useState(false)


return ( 

  <div align="left" className="homeback">
<Row>
  <Col xs={6}><div className='foont'><Row><br></br></Row>
  <ul className='li1'>
    <li><img src={arrow} width="60" height="60" />&nbsp;&nbsp;Get 24x7 Online Help</li>
    <li><img src={arrow} width="60" height="60" />&nbsp;&nbsp;Subject expert for best guidance</li>
    <li><img src={arrow} width="60" height="60" />&nbsp;&nbsp;Get An Assured 'A' with US!</li>
  </ul></div>
  </Col>
  <Col xs={0.9}> <img src={line} width="1" height="450" /></Col>
  <Col  xs={5} align="left" className="mleft">

  <p className='contact'>Enter your Details and we will contact you!</p>
  <Form >
  <Row>
    <Col xs={3}> <InputGroup.Text id="basic-addon3">
        Mobile Number
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
        Book Slot here
      </InputGroup.Text></Col><Col Col xs={6}> <Datetime placeholder='book'/></Col></Row><Row><br></br></Row>
      <Row>
      <Col xs={3}><InputGroup.Text id="basic-addon3">
        Remarks
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
        Thank You!
      </Header>
      <Modal.Content>
        <p>
        We have received your information. Your details are safe with us. Here, on The Toppers Club, We respect your Privacy. Our subject experts will contact you soon personally on the Whatsapp number provided.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='blue' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Ok
        </Button>
      </Modal.Actions>
    </Modal>
  </Col>
</Row>

</div>
)
} 
  
export default Home;