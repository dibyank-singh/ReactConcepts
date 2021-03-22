import React, { useState } from 'react';

const UsestatewithMap =()=>{
  
    const biodata=[{
        
        id:1,name:"divyank ", state:"bihar", profession:"Mern Stack developer "
    },{
        id:2,name:"divyanshu kumar  ", state:"bihar", profession:"Indian Army "
    },{
        id:3,name:"ghanshayam ", state:"bihar", profession:"UPSC Aisparents "
    },{
        id:4,name:"preity ", state:"bihar", profession:"fashion designer "
    },{
        id:5,name:"priya  ", state:"bihar", profession:"actress "
    }

    


]
  const[intarr , setintarr]=useState(biodata);

  const ClickedArry=()=>{
  setintarr([]);
}

    return(
        <>
           { 
           
            intarr.map((currentval)=><h1 className="h1style" key={currentval.id}> Hello I'm {currentval.name} i'm from {currentval.state} , i'm a {currentval.profession}</h1>)
        
            }
          
         <button className="btn1" onClick={ClickedArry}> clear</button>
        
        </>
    )
    
}

export default UsestatewithMap;