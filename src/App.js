// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {

// //   const content={
// //     nao:"salman",
// //    css:{
// //     color:"red",
// //     fontSize:"30px",
// //     background:"orange"
// //    }
// //   }
// //   const [name,setName]= useState(content)
// //   const change=()=>{
// //     const update={
// //     nao:"aziz",
// //    css:{
// //     color:"yellow",
// //     fontSize:"px",
// //     background:"pink"
// //    }
// //   }
// //     return setName(update)

// //   }
// //  return( <>

// //   <h1 style={name.css}>{name.nao} </h1>
// //   <button onClick={change}>Click</button>
// //  </>
// //  )

// // }

// // export default App

// // import React from 'react'
// // import styled from "styled-components"

// // const App = () => {
// //   return (
// //    <>
// //    <Wrapper>
// //     Hello world
// //     </Wrapper>
// //    </>
// //   )
// // }

// // const Wrapper=styled.h1({
// //   color:"red",
// //   textAlign:"center"
// //   })

// // export default App;
// // import React, { useState } from 'react'

// // const App = () => {
// //   const change=(e)=>{
// //     const coolor=e.target.value
// //     const update={
// //     color:coolor

// //   }
// //     return setColor(update)
// //   }

// //   const cont={
// //     color:"red"

// //   }
// //   const [color,setColor]=useState(cont)
// //   return (
// //     <>
// //     <h1 style={color}>asdfgh</h1>
// //     <input type='color' onChange={change}/>

// //     </>
// //   )
// // }

// // export default App

// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {
// //   const change=(e)=>{
// //     const input=e.target.value;
// //     alert(input)

// //   }
// //   const [name,Setname]=useState()
// //   return (

// //     <>

// //   <input type='range' onChange={change}/>
// //    </>
// //   )
// // }

// // export default App

// import React, { useState } from 'react'

// const App = () => {

//   const content={

//     action:"show",
//     btn:"hide"
//   }
//   const [data,setData]=useState(content)

//   const change=()=>{
//     let temp=""
//     if(data.action=="show")
//     {
//       temp={

//     action:"hide",
//     btn:"show"
//   }

//     }else{
//       temp={

//     action:"show",
//     btn:"hide"
//   }

//     }

//     return setData(temp)
//   }

//   return (
// <>

//   <h1 className={data.action}>fgh </h1>
// <button onClick={change}>{data.btn}</button>

// </>
//   )
// }

// export default App

import React from "react";
import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
