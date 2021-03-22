
// import React from 'react'
// import { useState } from 'react/cjs/react.development'


// const Loginform = () => {
//     const [name, setname] = useState("")

//     const [fullname, setfullname] = useState("")

//     const[sename , setsecname]=useState("")
//     const[newsename , setnewsecname]=useState("")

//     const Changename = (evenes) => {
//         // console.log(evenes.target.value)
//         setname(evenes.target.value)

//     }

//     const newsetname = (event ) => {
//         event.preventDefault();
//         setfullname(name)
//         setfullname(setnewsecname)
//     }

//     const Changenametwo=(event)=>{
//     setsecname(event.target.value)
//     }
//     return (
//         <>
//             <div className="Main_div">
//                 <form onSubmit={newsetname}>
//                     <div>
//                         <h3> Hello {fullname} {newsename} </h3>
//                         <input type="text" placeholder="Enter Your Name" onChange={Changename} value={name}></input>
//                         {/* <br/> */}
//                         <input type="text" placeholder="Enter Your Password" onChange={Changenametwo} value={sename} ></input>
//                         {/* <br /> */}
//                         <button  input="submit"> Submit It </button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )

// }




// export default Loginform;
