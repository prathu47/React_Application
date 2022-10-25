import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Assets/Home.css";
function Home2() {
    return(
    
      <Row style={{ marginTop:"20px", marginBottom:"20px"}}>
        <Col style={{backgroundColor:"#d96124"}}>
          <Row>
            <Col></Col>
            <Col xs={7} style={{color:"white"}}> 
              <h2 style={{marginTop:"20px"}}>Fresh Investment Solutions!</h2> 
              <br />
              <ol>
                <li>Boutique Discretionary Investment Management & Stockbroking Services</li>
                <li>Third Party Fund Investments</li>
                <li>Bespoke Capital Protected Investments</li>
                <li>Invest in Africa Rising</li>
                <li>Investment course</li>
              </ol>
              <Button variant="outline-light"><strong>LEARN MORE</strong> </Button>

            </Col>
          </Row>
        </Col>
        <Col xs={6} style={{backgroundColor:"#414c50"}}>
          <Row>
            <Col xs={1}></Col>
            <Col xs={7} style={{color:"white", marginBottom:"20px"}}>
              <h2 style={{marginTop:"20px"}}>Learning to Save Money</h2>
              <ol>
                <li>Investment course</li>
                <li>Marketing course</li>
                <li>Management course</li>
              </ol>
              <p>During the existence of the company, a lot of companies and starters have become our customers. Most of them are now prosperous and popular in the business sphere.</p>
              <Button variant="outline-light"><strong>LEARN MORE</strong> </Button>
            </Col>
          </Row>
        </Col>
      </Row> 
    
    );
}
export default Home2;