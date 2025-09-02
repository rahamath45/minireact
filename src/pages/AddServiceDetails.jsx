
  import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewService } from "../handlers/apiHandler";

 
 const AddServiceDetails = ({Data,setAllData}) => {
    const [service_provider, setServiceName] = useState("");
  const [vechicle_type, setVechicle_type] = useState("");
  const [vechicle_number, setVechicle_number] = useState();
  const [date_of_service, setDate_of_service] = useState();
  const [date_of_delivery, setDate_of_delivery] = useState();
  const [service_details, setService_details] = useState("");
  const [service_amount, setService_amount] = useState("");
  const [contact, setContact] = useState();
  const [location, setLocation] = useState("");
  const [insurance_due_date, setInsurance_due_date] = useState();
  const navigate = useNavigate();
  const createNewService = async () => {
      const newService = {
        service_provider,
        vechicle_type,
        vechicle_number,
        date_of_service,
        date_of_delivery,
        service_details,
        service_amount,
        contact,
        location,
        insurance_due_date,
      };
      addNewService(newService).then((data)=>{
        if(data){
            setAllData([...Data,data]);
            navigate("/")
        }
      }).catch((err)=>console.log(err))
  };

   return (
    <>
        <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "10px",
        width: "700px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="service_provider"
        variant="outlined"
        value={service_provider}
        onChange={(e) => setServiceName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="vechicle_type"
        variant="outlined"
        value={vechicle_type}
        onChange={(e) => setVechicle_type(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="vechicle_number"
        variant="outlined"
        value={vechicle_number}
        type="number"
        onChange={(e) => setVechicle_number(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="date_of_service"
        variant="outlined"
        value={date_of_service}
        type="number"
        onChange={(e) => setDate_of_service(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="date_of_delivery"
        variant="outlined"
        type="number"
        value={date_of_delivery}
        onChange={(e) => setDate_of_delivery(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="service_details"
        variant="outlined"
        value={service_details}
        onChange={(e) => setService_details(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="service_amount"
        variant="outlined"
        type="number"
        value={service_amount}
        onChange={(e) => setService_amount(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="contact"
        variant="outlined"
        type="number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="insurance_due_date"
        variant="outlined"
        type="number"
        value={insurance_due_date}
        onChange={(e) => setInsurance_due_date(e.target.value)}
      />
      <Button onClick={createNewService}>Add</Button>
    </Box>
    </>
   );
 };
 
 export default AddServiceDetails;