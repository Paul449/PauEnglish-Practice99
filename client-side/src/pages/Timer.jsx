//import { useState } from "react";
//import useNavigate and useLocation to navigate to another page and know current location
import {useNavigate, useLocation} from 'react-router-dom';
export default function Timer(){
    let Navigate = useNavigate();
    let Location = useLocation();
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
        <button onClick={()=>{Navigate("/Chat")}}>Start Now</button>
        </>
    )
}
