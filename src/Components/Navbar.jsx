import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar style={{backgroundColor:"rgb(66, 75, 80)",padding:"20px",color:"white",paddingLeft:"100px"}} expand="lg"> 
        <Navbar.Brand href="#home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviy_MCQehlKgcAQBtAdW-rpZo1fEjziV2Kg&usqp=CAU" width={80} height={40}></img></Navbar.Brand>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:"orange"}}>HOME</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>ABOUT</Nav.Link>
            <Nav.Link href="#home" style={{color:"white"}}>SERVICES</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>PROJECTS</Nav.Link>
            <Nav.Link href="#home" style={{color:"white"}}>OUR BLOG </Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;