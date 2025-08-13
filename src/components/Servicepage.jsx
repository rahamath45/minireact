import Servicecard from './Servicecard';
import Search from './Search';
import { useNavigate } from 'react-router-dom';


function Servicepage({allData}){
    const navigate = useNavigate();
    return(
        <div className="servicepage">
          <Search/>
          <div className='bottom'>
          {allData.map((details,idx)=>(
            <div onClick={()=>navigate(`/services/${details.id}`)}>
              <Servicecard serviceDetails={details} key={idx}/>
              </div>
          ))}
          </div>
        </div>
    )
 }


 export default Servicepage;