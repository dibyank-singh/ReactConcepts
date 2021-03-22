import React  from 'react';
import ReactDom from 'react-dom';
import About from './Navbar/About'
import Contact from './Navbar/Contact'
import Services from './Navbar/Services'
import Link from './Navbar/Link'
import {Route , Switch } from 'react-router-dom';


const Main =()=>{
    return(
        <> 
        <Link/>
        {/* <h2>Hiii</h2>? */}
       <Switch>
         <Route exact path="/about" component={About}/> 
         <Route exact path="/contact" component={Contact}/> 
         <Route path="/Services" component={Services}/> 
         {/* <Route  component={Error}/>  */}
        
         
         </Switch>    
    </>

    )
}
export default Main;