import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import EditServiceDetails from "./pages/EditServiceDetails";
import AddServiceDetails from "./pages/AddServiceDetails";
import { getAllService } from "./handlers/apiHandler";
import BaseLayout from "./components/BaseLayout";

function reducerFunction(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("unknown action type");
  }
}

function App() {
  const [allData, setAllData] = useState([]);

  const [count, dispatch] = useReducer(reducerFunction, 0);

  useEffect(() => {
    getAllService().then((data) => {
        if (data) {
          setAllData(data) }
      }) .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> decrement</button>
      <Routes>
        <Route exact  path="/" element={ <BaseLayout> <Services Data={allData} setAllData={setAllData} /> </BaseLayout>}/>
        <Route path="/services/add"
          element={
            <BaseLayout>
              <AddServiceDetails Data={allData} setAllData={setAllData} />{" "}
            </BaseLayout>}/>
     <Route
          path="/services/edit/:id"
          element={<EditServiceDetails Data={allData} setAllData={setAllData} />}/>
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/nopage" element={<h1>no page</h1>} />
      </Routes>
    </>
  );
}

export default App;
