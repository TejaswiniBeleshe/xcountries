import React from "react";
import "../Country/Country.css"
const Country = ({name,flag,text})=>{
    return(
        <div className="countryCard">
            <img src={flag} alt={text}/>
            <h2>{name}</h2>      
        </div>
    )
}
export default Country;