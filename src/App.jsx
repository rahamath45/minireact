import { useEffect, useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom';
import { RESR_HOST_NAME, SERVICE_ENDPOINT } from './backend';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import EditServiceDetails from './pages/EditServiceDetails';
import AddServiceDetails from './pages/AddServiceDetails';




function App() {
  const [allData,setAllData] =useState([])
  const [error,setError] = useState("")
 useEffect(()=>{
      fetch(`${RESR_HOST_NAME}/${SERVICE_ENDPOINT}`,{method:"GET",})
       .then((response)=>response.json())
       .then((data)=> setAllData(data))
       .catch((err)=> console.log(err));
 },[]);


  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Services Data={allData} />}/>
        <Route path="/services/add" element={<AddServiceDetails/>}/>
         <Route path="/services/edit/:id" element={<EditServiceDetails/>}/>
        <Route path="/services/:id" element={<ServiceDetails/>}/>
        <Route path='/nopage' element={<h1>no page</h1>}/>
      </Routes>
    
    </>
  )
}

 export default App;
  




