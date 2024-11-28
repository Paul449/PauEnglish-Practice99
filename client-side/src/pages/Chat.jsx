/*import react bootstrap components needed*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBox from '../components/searchBox';
//import OnlineBar from '../components/onlineBar';
export default function Chat(){
    return(
    <>
    <Container fluid ='lg' className='vh-100' >
     <Row className='no-gutters' >
      <Col lg = {4} className='conversations h-100'>
      <div className='settings-tray'>
      <div className='profile-image'><img src=''alt='myself'/></div>  
      <h5>Saved Conversations:</h5>
      </div>
      <div className='Search-bar'>
        <SearchBox/>
      </div>
      <div className='conver-list'>

      </div>
      </Col>
      <Col lg={8} className=' chatLayout h-100'>
    
      </Col>
     </Row>
    </Container>
    </>
    )
}

