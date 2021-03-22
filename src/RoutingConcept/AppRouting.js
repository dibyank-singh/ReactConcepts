import React from 'react';
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'

import {Route , Switch } from 'react-router-dom';

const Name =()=>{
  return(
    <h1> Hii Your Name is Dibyank , Thanks for visit here </h1>
  )
}

const AppRouting=()=>{
  return(
    <> 
       <Menu/>
       <Switch>
         <Route exact path="/about" component={About}/> 
         <Route exact path="/contact" component={Contact}/> 
         <Route path="/contact/name" component={Name}/> 
         <Route  component={Error}/> 
        
         
         </Switch>    
    </>


  )
}

  export default AppRouting ;