import React from "react";
import styles from "../Country/Country.module.css"
const Country = ({name,flag,text})=>{
    return(
        <div className={styles.countryCard}>
            <img src={flag} alt={text}/>
            <h3>{name}</h3>      
        </div>
    )
}
export default Country;