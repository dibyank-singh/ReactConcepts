
import React from 'react';
import { NavLink } from 'react-router-dom'

const Link = () => {
    return (
        <>
            <div className="main_div">
                <div className="left_navbar">
                     <div className="ftlink">

                    <h2 className="hed">Divyank Technical</h2>
                   
                     </div>
                </div>
                <div className="right_navbar">

                    <div className=" Nav_style">
                        <NavLink activeClassName="act_class" to="./">About </NavLink>
                        <NavLink activeClassName="act_class" to="/contact">Contact Us </NavLink>
                        <NavLink activeClassName="act_class" to="/services"> Services </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Link;