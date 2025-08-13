

  function Servicecard({serviceDetails}){  
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
                      <button>EDIT</button>
                      <button>DELETE</button>
                    </div>
           </div>
        </div>
    )
 }
 export default Servicecard;