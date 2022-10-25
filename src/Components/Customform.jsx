import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';


function Customform() {
    const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
    return (
      <Row style={{marginBottom:"20px", backgroundColor:"gray"}}>
      <Col></Col>
      <Col>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} style={{margin:"20px"}}>
      
          <Form.Control type="email"  {...register("email")} placeholder="Email" /> <br />
          <Form.Control type="password"  {...register("password")} placeholder="Password" /> <br />
          <Form.Control type="phonenumber"  {...register("phonenumber")} placeholder="Phone Number" /> <br />
          <Form.Control as="textarea" rows={3} {...register("message")} placeholder="Message" /> <br />
          <p style={{backgroundColor:"#d96124", color:"white", padding:"20px"}}> <b> {data}</b></p>
          <button className='btn' style={{backgroundColor:"#414c50", color:"white"}}> <b>Submit </b> </button>
        </form>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Customform