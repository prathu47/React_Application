import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Assets/Home.css";
function Footer() {
    return(
    
      <Row style={{backgroundColor:"#404b51", color:"whitesmoke"}}>
        <Col xs={4}></Col>
        <Col  style={{marginTop:"80px", marginBottom:"80px", paddingLeft:"50px"}} >
                    <div><h2> <b>HEBAR</b></h2></div>
        </Col>
        <Col xs={6} style={{marginTop:"85px", marginBottom:"80px", paddingLeft:"50px"}}><div><p>© 2015 Privacy policy</p></div></Col>
      </Row>    
    );
}
export default Footer;