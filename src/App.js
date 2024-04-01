import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import AddPatient from "./Pages/AddPatient/AddPatient";
import DrugList from "./Pages/DrugList/DrugList";
import ElementList from "./Pages/ElementList/ElementList";
import Register from "./Pages/Authentication/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addPatient" element={<AddPatient />} />
        <Route path="/drugList" element={<DrugList />} />
        <Route path="/elementList" element={<ElementList />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
