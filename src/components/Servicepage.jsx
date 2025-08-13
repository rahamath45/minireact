import Servicecard from './Servicecard';
import Search from './Search';



function Servicepage({allData,setAllData}){
   
    return(
        <div className="servicepage">
          <Search/>
          <div className='bottom'>
          {allData.map((details,idx)=>(
            <div >
              <Servicecard serviceDetails={details}
               key={idx} setAllData={setAllData} allData={allData}/>
              </div>
          ))}
          </div>
        </div>
    )
 }


 export default Servicepage;