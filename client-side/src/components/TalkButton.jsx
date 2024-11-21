import Button from 'react-bootstrap/Button';
import PushToTalk from '../assets/PTT';
function TalkButton(color){
return(
    <>
    <Button variant='PTT'><PushToTalk/> Push-To-Talk </Button>
    </>
)  
}
export default TalkButton;