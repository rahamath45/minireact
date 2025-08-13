import React, { useEffect, useState } from "react";
import Servicecard from "../components/Servicecard";
import { useParams } from "react-router-dom";
import { RESR_HOST_NAME, SERVICE_ENDPOINT } from "../backend";

const  ServiceDetails = ()=>{
  const {id} = useParams();
  const [details,setDetails] = useState({})
 useEffect(()=>{
      fetch(`${RESR_HOST_NAME}/${SERVICE_ENDPOINT}/${id}`,{method:"GET",})
       .then((response)=>response.json())
       .then((data)=> setDetails(data))
       .catch((err)=> console.log(err));
 },[]);
    return (
        <div className="router">
          <Servicecard serviceDetails={details}/>
        </div>
    )
}

export default ServiceDetails;