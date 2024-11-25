/*import react bootstrap components needed*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Chat(){
    return(
    <>
    <Container fluid = 'lg' className='vh-100' >
     <Row className='h-100' lg={4}>
      <Col lg = {4} style={{backgroundColor:'#1E90FF', borderRight:'5px solid #708090', padding:'20px'}} className='h-100'>
      col One
      <div className='conver-list' style={{border:'2px solid black'}}>

      </div>
      </Col>
      <Col lg = {8} style={{backgroundColor:'#F0F8FF', padding:'20px'}} className='h-100'>
      col Two
      </Col>
     </Row>
    </Container>
    </>
    )
}

