import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [allData,setAllData] =useState([])


 const API = "https://6894a313be3700414e13f330.mockapi.io/services";
 useEffect(()=>{
      fetch("https://6894a313be3700414e13f330.mockapi.io/services",{method:"GET",})
       .then((response)=>response.json())
       .then((data)=> setAllData(data))
       .catch((err)=> console.log(err));
 },[]);
  return (
    <>
         <div className="servicepage">
          <Search/>
          <div className='bottom'>
          {allData.map((details,idx)=>(
              <Servicecard serviceDetails={details} key={idx}/>
          ))}
          </div>
        </div>
    </>
  )
}

 export default App;

function Search(){
    return(
        <div className='top'>
        <input type="text" placeholder='service search'/>
        <button className='btn'>Search</button>
    </div>
    )
}

 function Servicecard({serviceDetails}){  
    return(
        <div className="servicecard">
           <div className='head'>
            <div className='topic'>Service</div>
             <div className='loc'>Location : {serviceDetails.location} </div>
           </div>
           <div className='body'>
                 <div className='content'>
                     <div className='locs'>Vechicle Type : {serviceDetails.vechicle_type}</div>
                      <div className='loc'>Date of service :{new Date().toLocaleString().slice(0, 9)}</div>
                      <div className='loc'>Date of delivery: {new Date().toLocaleString().slice(0, 9)} </div>
                      <div className='locs'>Vechicle name: {serviceDetails.vechicle_name }</div>
                 </div>
                 <div className='amount'> Service amount : {serviceDetails.service_amount}</div>
           </div>
        </div>
    )
 }

