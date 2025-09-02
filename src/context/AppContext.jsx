import { createContext, useContext, useState } from "react"
    const appCTX = createContext(null)
 export default function AppContext({children}){
     const [allData,setAllData] =useState([])
    return(
       <appCTX.Provider value={{
        allData,setAllData
       }}>
          {children}
       </appCTX.Provider>
    )
 }

 export function useAppContext(){
    return useContext(appCTX)
 }