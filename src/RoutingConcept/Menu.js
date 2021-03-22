
import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu =()=>{
    return(
        <>
        <div className=" Nav_style">  
        <NavLink to="./">About </NavLink>
        <NavLink to="/contact">Contact Us </NavLink>
        <NavLink to="/contact/name"> Contact/name </NavLink>
        </div>
        </>
    )
}

export default Menu;