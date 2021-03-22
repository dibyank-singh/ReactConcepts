
import React, { useState } from 'react'


const Count= ()=>{
    
    // const state= useState
    
    const [count , setCount ]= useState(2);
    
    const Clickme =()=>{
        // console.log("cleaked" + count+1)
        
        setCount(count + 2);

    }
    return (
     <>
     <h1> Hello World</h1>
     <h3>{count}</h3>
     <button onClick={Clickme}>Click Me </button>
     </>
    

    );

};

export default Count;

 