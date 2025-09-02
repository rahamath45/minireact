import { RESR_HOST_NAME, SERVICE_ENDPOINT } from "../backend";

 async function getAllService(){
   try{
     let response = await fetch(`${RESR_HOST_NAME}/${SERVICE_ENDPOINT}`,{
        method:"GET"
    });
    let data = await response.json();
    return data;
   }catch(error){
     console.log(error);
    return error;
   }
 }
 async function getServiceByID(id){
    try{
         let response = await fetch(`${RESR_HOST_NAME}/${SERVICE_ENDPOINT}/${id}`,{
        method:"GET"
    });
    let data = await response.json();
    return data;
    }
    catch(error){
    console.log(error);
    return error;
    }
 }
async function addNewService(payload){
    try{
        let response = await fetch(`${RESR_HOST_NAME}/${SERVICE_ENDPOINT}`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{"Content-Type":"application/json"}
    });
    let data = await response.json();
    return data;
    }catch(error){
              console.log(error);
               return error;
    }
}
 async function editService(serviceid,updatepayload){
  try{
       let response = await fetch(`${RESR_HOST_NAME}/${SERVICE_ENDPOINT}/${serviceid}`,{
        method:"PUT",
        body:JSON.stringify(updatepayload),
        headers:{"Content-Type":"application/json"}
    });
    let data = await response.json();
    return data;
  }catch(error){
            console.log(error);
               return error;
  }
 }
 async function deleteServiceByID(id){
        try{
         let response = await fetch(`${RESR_HOST_NAME}/${SERVICE_ENDPOINT}/${id}`,{
        method:"DELETE"
    });
    let data = await response.json();
    return data;
    }
    catch(error){
    console.log(error);
    return error;
    }
 }
 export {getAllService,getServiceByID,addNewService,editService,deleteServiceByID}