/*import react bootstrap components needed*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OnlineBar from '../components/onlineBar';
export default function Chat(){
    return(
    <>
    <Container fluid = 'lg' className='vh-100' >
     <Row className='h-100' lg={4} >
      <Col lg = {3} className='conversations h-100'>
      <h5>Saved Conversations:</h5>
      <div className='conver-list'>

      </div>
      </Col>
      <Col lg={9}>
      <OnlineBar/>
      </Col>
      <Col lg = {9} className=' chatLayout h-100'>
      
      </Col>
     </Row>
    </Container>
    </>
    )
}

