import './Recipe.css'
import React from "react" ;
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";


const Recipe = () => {
    return(
        <div className='recipe'>
            This is the Recipe
            <Ingredients />
            <Instructions />
        </div>
    )
}


export default Recipe