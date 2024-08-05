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
            let res = await fetch("https://restcountries.com/v3.1/all");
            let data = await res.json();
            console.log(data);
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
            let d1 = ele.name.common.toLowerCase()
            return d1.includes(serchData.toLowerCase());
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
        {/* {serchData} */}
        <div className={styles.parent}>
            {
                displayData.map((ele)=><Country name={ele.name.common} text={ele.name.common} flag={ele.flags.png}/>)
            }
        </div>
        </context.Provider>
    )
}
export default Countries;