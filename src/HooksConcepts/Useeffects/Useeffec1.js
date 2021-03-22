import React, {useState , useEffect } from 'react'

const Useeffec1 = () => {

    const [state, setstate] = useState(0)
    const [secstate, setsecstate] = useState(0)

    useEffect(()=>{
        if (state>=1) {

            document.title= `Chats ${state}`
        } else {
            document.title= `Chats`
        }
    //   ***** [] is dependency list , which is used to control change of useeffect in the web page
    },[state]) 
    useEffect(()=>{
      alert("hii")
    //   ***** [] is dependency list , which is used to control change of useeffect in the web page
    },[secstate]) 


    return (
        <>
        <div>
            <h2>{state}</h2>
            <button onClick={ ()=>setstate(state+1)

            }>Click me </button>
        </div>
        <div>
            <h2>{secstate}</h2>
            <button onClick={ ()=>setsecstate(secstate+1)

            }>Click me </button>
        </div>
        </>
    )
}

export default Useeffec1;
