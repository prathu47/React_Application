
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function TextExample({data}) {
    console.log(data)
  return (

    <Card style={{ width: '23rem' }}>
        
      <Card.Body style={{textAlign:"center"}}>
        <img style={{height:"190px", width:"auto"}} src={data.icon}></img>
        <Card.Title style={{padding:"30px 0 0 0", color:"chocolate", fontSize:"30px"}}><b>{data.title} </b></Card.Title>
        <Card.Text style={{fontsize: "15px"}}>
        {data.description}
        </Card.Text>
        <Button variant="outline-dark"><strong>READ MORE</strong> </Button>
        
      </Card.Body>
    </Card>
  );
}

export default TextExample;