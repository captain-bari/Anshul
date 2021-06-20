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
import Jumbotron from 'react-bootstrap/Jumbotron'
import emailjs from 'emailjs-com';

const Home =()=> 
{ 

const [mail, setMail] = useState("");
    const [value, setValue] = useState()
    const [value2, setValue2] = useState("")
    const [open, setOpen] = React.useState(false)
    const [sent, setsent] = useState(false)

    var data = {
        to_email:"barinder.turkey",
        from_name:mail,
        from_subject:"",
        from_date : "",
        mobile : "",
        remark : ""
      };

const changeDate = (event) => {
  setValue2(event.toDate())
}
const send = () => {
  if(sent == false && value != undefined){
    data.mobile = value;
    data.from_name = document.getElementById("basic-email").value;
    data.from_subject = document.getElementById("basic-subject").value;
    data.from_date = value2;
    data.remark = document.getElementById("basic-remark").value;
    emailjs.send('service_5zxqe2p', 'template_2607eqo', data , 'user_0nhOQbYFrKQvGH84WriZP')
    .then((result) => {
      console.log(result.status , result.text);
    }, (error) => {
      console.log(error.text);
    });
    setsent(true);
  } else {
    if (value == undefined){alert("Make sure you have entered Mobile number")}
    else {alert("We have alreay captured your information. Please refresh page to Resend it.")}
    
  }
}


return ( 

  <div align="left" className="homeback">
<Row>
  <Col ><div className='foont'><Row><br></br></Row>
  <ul className='li1'>
    <li><img src={arrow} width="60" height="60" />&nbsp;&nbsp;Get 24x7 Online Help</li>
    <li><img src={arrow} width="60" height="60" />&nbsp;&nbsp;Subject expert for best guidance</li>
    <li><img src={arrow} width="60" height="60" />&nbsp;&nbsp;Get An Assured 'A' with US!</li>
  </ul></div>
  </Col>
  {/* <Col xs={0.9}> <img src={line} width="1" height="450" /></Col> */}
  <Col align="left" className="mleft">
  <Jumbotron className="jumboright">
  <p className='contact'>Enter your Details and we will contact you!</p>
  <Form >
  <Row>
    <Col > <InputGroup.Text id="basic-addon3">
        Mobile Number
      </InputGroup.Text></Col>
    <Col ><PhoneInput placeholder="Enter phone number" value={value} onChange={setValue}/></Col>
  </Row><Row><br></br></Row>
    <Row>
      <Col ><InputGroup.Text id="basic-addon3">
      Email address
      </InputGroup.Text></Col>
      <Col> <FormControl  id="basic-email" aria-describedby="basic-addon3" placeholder='Enter Email Address'  className="smaller-input"/></Col>
    </Row><Row><br></br></Row>
     
    <Row>
      <Col ><InputGroup.Text id="basic-addon3">
        Subject Name
      </InputGroup.Text></Col>
      <Col><FormControl id="basic-subject" aria-describedby="basic-addon3" /></Col>
    </Row><Row><br></br></Row>
   
  <Row><Col> <InputGroup.Text id="basic-addon3">
        Book Slot here
      </InputGroup.Text></Col><Col> <Datetime id="date-time" onChange={changeDate}/></Col></Row><Row><br></br></Row>
      <Row>
      <Col ><InputGroup.Text id="basic-addon3">
        Remarks
      </InputGroup.Text></Col>
      <Col><FormControl id="basic-remark" aria-describedby="basic-addon3" /></Col>
    </Row>
      <Form.Text className="disclamer">
      ** Your details are safe with us. Here, on The Toppers Club, We respect your Privacy. Our subject experts will contact you personally on the Whatsapp number provided.
    </Form.Text>
</Form><Row><br></br></Row>
<Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() =>{ send(); setOpen(true)}}
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
</Jumbotron>
  </Col>
</Row>

</div>
)
} 
  
export default Home;