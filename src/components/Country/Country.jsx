import React from "react";
import "../Country/Country.css"
const Country = ({name,flag,text})=>{
    return(
        <div className="countryCard">
            <img src={flag} alt={text}/>
            <h3>{name}</h3>      
        </div>
    )
}
export default Country;