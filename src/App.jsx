import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
       <Search/>
         <div className="servicepage">
           <Servicecard/>
        </div>
    </>
  )
}

export default App
function Search(){
    return(
        <div className='top'>
        <div className='servicesearch'>
        <input type="text" placeholder='service search'/>
        </div>
        <button>Search</button>
    </div>
    )
}

 function Servicecard(){
    return(
        <div className="servicecard">
           <div></div>
           <div></div>
        </div>
    )
 }