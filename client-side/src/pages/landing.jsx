
import {useNavigate, useLocation} from 'react-router-dom';
export default function Landing(){
    const navigate = useNavigate();
    const location = useLocation();
    return(
    <>
    <div className="landing">
      <h1 id="Title">PauEnglish</h1>
      <p>
        Welcome to PauEnglish, the best app where you can develop<br/>
        your English skills by discussing specific topics with an AI bot.
      </p>
      <p>Start Today</p>
      <button onClick={()=>{console.log("...redirect"); navigate("./Topics")}}>Speak with chatbot</button>
      </div>
     </>
    )
}