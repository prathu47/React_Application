import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';


function Customform() {
    const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
    return (
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        
          <Form.Control type="email"  {...register("email")} placeholder="Email" />
          <Form.Control type="password"  {...register("password")} placeholder="Password" />
          <Form.Control type="phonenumber"  {...register("phonenumber")} placeholder="Phone Number" />
          <Form.Control as="textarea" rows={3} {...register("message")} placeholder="Message" />
          <p>{data}</p>
          <input className='btn' type="submit" />
        </form>
      );
}

export default Customform