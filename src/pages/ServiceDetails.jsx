import React, { useEffect, useState } from "react";
import Servicecard from "../components/Servicecard";
import { useParams } from "react-router-dom";
import { getServiceByID } from "../handlers/apiHandler";


const  ServiceDetails = ()=>{
  const {id} = useParams();
  const [details,setDetails] = useState({})
 useEffect(()=>{
      getServiceByID(id).then((data)=>{
        if(data){
          setDetails(data)
        }
      }).catch((err)=>console.log(err))
 },[id]);
    return (
        <div className="router">
        
          <Servicecard serviceDetails={details}/>
        </div>
    )
}

export default ServiceDetails;