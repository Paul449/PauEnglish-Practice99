/*import react bootstrap components needed*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBox from "../components/searchBox";
export default function Chat(){
    return(
    <>
      <Container fluid = "md"> 
        <Row style={{display:'inline-grid',border:'2px solid blue',padding:'70px', height: '250%'}}>
         <Col xs={2} sm={4} md={6} lg={8} xl={10}>column 1
            <h5>Saved Conversations</h5>
            <div className='conver-list'>
              
            </div>
         </Col>
        </Row>
      </Container>
    </>
    )
}

