/*import react bootstrap components needed*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBox from "../components/searchBox";
export default function Chat(){
    return(
    <>
      <Container fluid = "md"> 
        <Row>
         <Col lg={4}>column 1
            <h5>Saved Conversations</h5>
            <div className='conver-list'>
              <ol>
                <li>
                  <div className='conver'>
                    <p>Topic:</p>
                  </div>
                </li>
              </ol>
            </div>
         </Col>
         <Col lg={8}>column 2</Col>
        </Row>
      </Container>
    </>
    )
}

