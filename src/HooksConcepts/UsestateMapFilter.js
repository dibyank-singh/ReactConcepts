import React, { useState } from 'react';

const UsestateMapFilter =()=>{
  
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

const AgainClick=(id)=>{
    const mynewarray= intarr.filter((Values)=>{
        return Values.id !== id;

        
        
    })
    
    setintarr(mynewarray);
}

    return(
        <>
           { 
           
            intarr.map((currentval)=>{
                return(
            
            <h1 className="h1style" key={currentval.id}> Hello I'm
             {currentval.name} i'm from {currentval.state} , i'm a {currentval.profession}
             
             <button onClick={()=> AgainClick( currentval.id)}> Remove Item  </button>
             
             </h1>
             

                )}
                )} 
        </>
    )
    
}

export default UsestateMapFilter;