import React from "react";
import styles from "../Header/Seach.module.css"
import { useContext } from "react";
import { context } from "../Countries/Countries";
const Search = ()=>{
    let {ip,setIp} = useContext(context);
    return(
        <input type="text" id={styles.ip} placeholder="Search for countries" value={ip} onChange={(e)=>{
            if(ip.length === 0){
                let txt = e.target.value;
                txt = txt.toUpperCase();
                setIp(txt)
            }else setIp(e.target.value)
           
        }} />
    )
}
export default Search;