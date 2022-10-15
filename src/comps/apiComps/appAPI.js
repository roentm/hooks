import React, { useEffect, useState } from 'react'

export default function AppAPI() {
    const [arr,setArr]= useState([]);
    useEffect(()=>{
        doApi();
    },[])

    const doApi=async()=>{
        const url="http://fs1.co.il/bus/shop.php";
        try{
            const resp=await fetch(url);
            const data=await resp.json();
            setArr(data);
        }
        catch(err){
            console.log(err)
        }

    }
    
  return (
    <div>
        <h1>List of Items:</h1>
        <ul>
            {arr.map(item=>{
                return(
                    <li key={item.id}>
                        {item.name} - {item.price} NIS
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
