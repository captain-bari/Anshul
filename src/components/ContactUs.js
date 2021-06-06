import React from 'react';
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';


export default function ContactUs() {

    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

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