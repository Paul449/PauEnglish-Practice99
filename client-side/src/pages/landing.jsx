import { useNavigate } from 'react-router-dom'
export default function Landing(){
    const Navigation = useNavigate();
    return(
    <>
      <h1 id="Title">PauEnglish</h1>
      <p>
        Welcome to PauEnglish, the best app where you can develop<br/>
        your English skills by discussing specific topics with an AI bot.
      </p>
      <p>Start Today</p>
      <button onClick={()=>Navigation('/Topics')}>Speak with chatbot</button>
     </>
    )
}