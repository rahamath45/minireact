 import React from "react";
 import { Box, Button, TextField } from "@mui/material";
import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RESR_HOST_NAME, SERVICE_ENDPOINT } from "../backend";
import { editService } from "../handlers/apiHandler";


const EditServiceDetails = ({Data,setAllData}) => {
   const { id } = useParams();
   const [details,setDetails] = useState();
  const [service_provider, setServiceName] = useState();
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
  useEffect(() => {
    fetch(`${RESR_HOST_NAME}/${SERVICE_ENDPOINT}/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((details) => {
        setServiceName(details.service_provider);
        setVechicle_type(details.vechicle_type);
        setVechicle_number(details.vechicle_number);
        setDate_of_service(details.date_of_service);
        setDate_of_delivery(details.date_of_delivery);
        setService_details(details.service_details);
        setService_amount(details.service_amount);
        setContact(details.contact);
        setLocation(details.location);
        setInsurance_due_date(details.insurance_due_date);
        setDetails(details);
      })
      .catch((err) => console.log(err));
  }, [id]);

  async function updateNewService() {
    const updatedService = {
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
    editService(id,updatedService).then((data)=>{
      const selectedServiceIndex = Data.findIndex((details)=>details.id == id);
        Data[selectedServiceIndex] = data;
        setAllData([...Data]);
      navigate("/");
    }).catch((err)=>console.log(err))
  }
  return (
    <>
      {details && (
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
            variant="outlined"
            value={service_provider}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={vechicle_type}
            onChange={(e) => setVechicle_type(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={vechicle_number}
            type="number"
            onChange={(e) => setVechicle_number(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={date_of_service}
            type="number"
            onChange={(e) => setDate_of_service(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            value={date_of_delivery}
            onChange={(e) => setDate_of_delivery(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={service_details}
            onChange={(e) => setService_details(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            value={service_amount}
            onChange={(e) => setService_amount(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            value={insurance_due_date}
            onChange={(e) => setInsurance_due_date(e.target.value)}
          />
          <Button onClick={updateNewService}>Edit</Button>
        </Box>
      )}
    </>
  );
};

export default EditServiceDetails;