import {useLocation, useNavigate} from 'react-router-dom'
import Topics from './topics';
function Landing(){
    const Location = useLocation();
    const Navigation = useNavigate();
    return(
    <>
      <h1 id="Title">PauEnglish</h1>
      <p>
        Welcome to PauEnglish, the best app where you can develop<br/>
        your English skills by discussing specific topics with an AI bot.
      </p>
      <p>Start Today</p>
      <button onClick={()=>Navigation('/topics')}>Speak with chatbot</button>
     </>
    )
}
export default Landing;