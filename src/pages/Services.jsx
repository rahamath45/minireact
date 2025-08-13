 import React from "react";
import Servicepage from "../components/Servicepage";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

 const Services = ({Data,setAllData}) => {
    const navigate = useNavigate();
    return(
        <div>
            <Button onClick={()=> navigate("services/add")}>Add to cart</Button>
        <Servicepage allData={Data} setAllData={setAllData}/>
        </div>
    )
 }

 export default Services;