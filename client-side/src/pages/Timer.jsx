//import { useState } from "react";
export default function Timer(){
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
        <button>Start Now</button>
        </>
    )
}
