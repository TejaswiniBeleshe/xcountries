import React from "react";
import Country from "../Country/Country";
import styles from "../Countries/Countries.module.css"
import { useEffect } from "react";
import { cleanup } from "@testing-library/react";
import { useState } from "react";

const Countries = ()=>{
    const [countries,setCountries] = useState([])
    
    let fetchData = async()=>{
        try{

            let res = await fetch("https://xcountries-backend.azurewebsites.net/all");
            let data = await res.json();
            // console.log(data[0]);
            setCountries(data)
        }
        catch(err){
        console.error(err.message);

        }
        
    }
    useEffect(()=>{
        fetchData();

        
    },[])

    return(
        <div className={styles.parent}>
            {
                countries.map((ele)=><Country name={ele.name} text={ele.abbr} flag={ele.flag}/>)
            }
           
        </div>
    )
}
export default Countries;