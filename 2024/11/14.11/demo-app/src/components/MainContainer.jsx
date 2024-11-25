import './MainContainer.css'
import React from "react" ;
import Head from "./Head";

import Recipe from "./Recipe";



const MainContainer = () => {
    return(
        <div className="main-container">
            Hello to the container
            <Head />
            <Recipe />
        </div>
    )
}



export default MainContainer