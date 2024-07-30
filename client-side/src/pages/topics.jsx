
import Interests from "../components/interests";
import { useNavigate, useLocation} from 'react-router-dom'
export default function Topics(){
    let Location = useLocation();
    let Navigate = useNavigate();
return(
    <>
    <section>
    <h2>Step 1: Select a topic to discuss:</h2>
    <Interests/>
    </section>
    <section>
        <button onClick={()=>Navigate('/Timer')}>Next</button>
    </section>
    </>
) 
}

