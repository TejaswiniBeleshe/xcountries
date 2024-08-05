import React from "react";
import Country from "../Country/Country";
import styles from "../Countries/Countries.module.css"
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import { createContext } from "react";
import { useMemo } from "react";

let context = createContext();
export {context};
const Countries = ()=>{
    const [countries,setCountries] = useState([]);
    const [displayData,setDisplayData] = useState([])
    const [ip,setIp] = useState('');
    const [serchData,setSeachData] = useState('');
    const [timer,setTimer] = useState('');
    
    let fetchData = async()=>{
        try{
            let res = await fetch("https://xcountries-backend.azurewebsites.net/all");
            let data = await res.json();
            console.log(data[0]);
            setCountries(data);
            setDisplayData(data)
        }
        catch(err){
           console.error(`Error fetching data:${err.message}`);

        }  
    }
    useEffect(()=>{
        fetchData(); 
    },[])
    
    let arr = useMemo(()=>{
        return countries.filter((ele)=>{
            return ele.name.includes(serchData);
        })
    },[serchData]);
    
    useEffect(()=>{
        setDisplayData(arr);
    },[serchData])

    useEffect(()=>{
        let res;
        res = setTimeout(()=>{
            setSeachData(ip);
            console.log('set')
        },800);
        setTimer(res);
        return ()=>{
            clearTimeout(timer)
        }
    },[ip])
    
    return(
        <context.Provider value={{ip,setIp}}>
        <Header/>
        {serchData}
        <div className={styles.parent}>
            {
                displayData.map((ele)=><Country name={ele.name} text={ele.abbr} flag={ele.flag}/>)
            }
        </div>
        </context.Provider>
    )
}
export default Countries;