import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { useState } from 'react'

// const Simpleform = () => {
//     const [name, setname] = useState({
//         Fname: "",
//         lname: "",
//     });

//     const Changename = (evenes) => {
        
//         console.log(evenes.target.name)
        
//         // console.log(evenes.target.value)
//         // setname(evenes.target.value)

//         const values = evenes.target.value
//         const names = evenes.target.name

//         setname((preVal) => {

//             if (names === 'Fname') {
//                 return {
//                     Fname: values,
//                     lname: preVal.lname
//                 };
//             } else if (names === 'lname') {
//                 return {
//                     lname: values,
//                     Fname: preVal.Fname
//                 };


//             }
//             const newsetname = (event) => {
//                 event.preventDefault();
//                 alert("Form submitted")
//             }
//             return (
//                 <>
//                     <div className="Main_div">
//                         <form onSubmit={newsetname}>
//                             <div>
//                                 <h3> Hello {name.Fname} {name.lname}</h3>
//                                 <input type="text" placeholder="Enter Your Name" onChange={Changename} value={name.Fname} name='Fname'></input>
//                                 {/* <br/> */}
//                                 <input type="text" placeholder="Enter Your Password" onChange={Changename} value={name.lname} name='lname' ></input>
//                                 {/* <br /> */}
//                                 <button input="submit"> Submit It </button>
//                             </div>
//                         </form>
//                     </div>
//                 </>
//             )

//         },

//         export default Simpleform;


//  Using material Ui Icons 


const Simpleform = () => {
    return(
        <>
        <button className ="btn btn-success">  Clik Me </button>
         <YouTubeIcon/>
        </>
    )
}

export default Simpleform ;