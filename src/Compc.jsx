import React, { useContext } from 'react'
import {FirstName,LastName} from './CompA'

const Compc= ()=>{
    const fname= useContext(FirstName);
    const Lname= useContext(LastName);

    return(
        <h1> Hello Dear I Am {fname } {Lname} and I'am Using  parents to child comp with Context Api and Usecontext </h1>
    )
}

export default Compc;