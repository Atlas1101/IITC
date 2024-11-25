import './Head.css'
import React from "react" ;
import Intro from "./Intro";
import Prep from "./Prep";

const Head = () => {
    return(
        <div className='head'>
            This is the head
            <Intro />
            <Prep />
        </div>
    )
}


export default Head