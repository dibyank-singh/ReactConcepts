import React, { useState } from 'react';

const UsestatewithObject =()=>{

    const [currentarr , setcurrentarr]=useState({
      
        name:"divyank" , age:20 , degree:"BCA",
        // name:"divyanshu" , age:20 , degree:"BA",
        // name:"ghanshayam" , age:20 , degree:"BCA",
        // name:"preity" , age:20 , degree:"BA"
    })

    const Clickedme=()=>{

        setcurrentarr(
            // {name:"ghanshayam " , age:22 , degree:"Bca"}
            {...currentarr , age:66}

        )

    }
    return(
        <>
        <h2>i'm {currentarr.name} my age is {currentarr.age}  and my degree is {currentarr.degree}</h2>
        <button onClick={Clickedme}> Update</button>
        </>
    )
}
export default UsestatewithObject;
