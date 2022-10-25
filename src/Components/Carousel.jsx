import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom'
const Carousel = () => {
  let data = [
    {
      id: "1",
      img: "https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider10.jpg",
      text: "WE MEET YOUR FINANCIAL INVESTMENT NEEDS "
    },
    {
      id: "2",
      img: "https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider30.jpg",
      text: "WE WILL HELP TO CREATE YOUR WEALTH"
    },
    {
      id: "3",
      img: "https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider20.jpg",
      text: "SIMPLE INVESTING PROSPEROUS FUTURE"
    },
  ]
  const [Number, setNumber] = useState(0)
  return (

    <div style={{backgroundImage: `url(${data[Number].img})`,height:"80vh"}}>

      
        {/* <img src={data[Number].img} width="100%" style={{ height: 480 }} alt="" /> */}
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",height:"100%",alignItems:"flex-end" }}>
        <Button style={{backgroundColor:"#d96124", padding:"28px 20px 28px 20px", color:"white",marginBottom:"12px"}} onClick={()=>setNumber(Math.abs((Number-1))%3)}>&#8678;</Button>
        <h4 style={{backgroundColor:"#d96124", padding:"30px", color:"white"}}> <b>
          {
            data[Number].text
          } </b>
        </h4> 
        <Button style={{backgroundColor:"#d96124", padding:"28px 20px 28px 20px", color:"white", marginBottom:"12px"}} onClick={()=>setNumber((Number+1)%3)}><span>&#8680;</span></Button>
      </div>
      
      </div>
  )
}

export default Carousel