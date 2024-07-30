//import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function Timer(){
    const Location = useLocation();
    const Navigation = useNavigate();
    return(
        <>
        <h1>Step 2: SetTimer</h1>
        <form>
            <div>
            <label>Minutes</label>
            <input></input>
            </div>
            <p>:</p>
            <div>
            <label>Seconds</label>
            <input></input>
            </div>
        </form>
        <p>Up to 60 Minutes</p>
        <button onClick={()=>Navigation('/Chat')}>Start Now</button>
        </>
    )
}
