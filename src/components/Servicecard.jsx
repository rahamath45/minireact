import { useNavigate } from "react-router-dom";
import { deleteServiceByID } from "../handlers/apiHandler";


  function Servicecard({serviceDetails,allData,setAllData}){  
    const navigate = useNavigate();
     async function deleteService(id){
            deleteServiceByID(id).then((data)=>{
              if(data){
                 let deleteService = allData.filter((details)=> details.id !== id);
                     setAllData([...deleteService]);
              }
            }).catch((error)=> console.log(error))
      
     }
    return(
        <div className="servicecard" >
           <div className='head'>
            <div className='topic'>{serviceDetails.service_provider}</div>
             <div className='loc'>Location : {serviceDetails.location} </div>
           </div>
           <div className='body'>
                 <div className='content'>
                     <div className='locs'>Vechicle Type : {serviceDetails.vechicle_type}</div>
                      <div className='loc'>Date of service :{new Date().toLocaleString().slice(0, 9)}</div>
                      <div className='loc'>Date of delivery: {new Date().toLocaleString().slice(0, 9)} </div>
                      <div className='locs'>Vechicle name: {serviceDetails.vechicle_name }</div>
                      <div className='amount'> Service amount : {serviceDetails.service_amount}</div>
                 </div>
                    <div className="button">
                      <button onClick={()=> navigate(`/services/${serviceDetails.id}`)}>view</button>
                      <button onClick={()=>navigate(`/services/edit/${serviceDetails.id}`)}>EDIT</button>
                      <button onClick={()=>deleteService(serviceDetails.id)}>DELETE</button>
                    </div>
           </div>
        </div>
    )
 }
 export default Servicecard;