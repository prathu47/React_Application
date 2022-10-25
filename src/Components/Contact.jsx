import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Assets/Home.css";
function Contact() {
    return(
    
      <Row style={{backgroundColor:"#505960", color:"whitesmoke"}}>
        <Col>
            <Row>
                <Col style={{marginTop:"80px", marginBottom:"80px", paddingLeft:"50px"}} ><img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-location.png" alt="" /></Col>
                <Col xs={7} style={{marginTop:"93px", marginBottom:"80px"}}>
                    <div><h5> <b> NEW YORK 9870 ST</b></h5></div>
                    <div><h5><b>VINCENT GLASGOW</b></h5></div>
                </Col>
            </Row>
        </Col>
        <Col>
            <Row>
                <Col style={{marginTop:"80px", marginBottom:"80px", paddingLeft:"50px"}} ><img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-mail.png" alt="" /></Col>
                <Col xs={7} style={{marginTop:"110px", marginBottom:"80px"}}>
                    <div><h5> <b> CONTACT@DEMOLINK.ORG</b></h5></div>
                </Col>
            </Row>
        </Col>
        <Col>
            <Row>
                <Col style={{marginTop:"80px", marginBottom:"80px", paddingLeft:"50px"}} ><img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-mail.png" alt="" /></Col>
                <Col xs={7} style={{marginTop:"93px", marginBottom:"80px"}}>
                    <div><h5> <b> CALL US:</b></h5></div>
                    <div><h5> <b> +1 800 603 6035</b></h5></div>
                </Col>
            </Row>
        </Col>
      </Row>
    
    );
}
export default Contact;