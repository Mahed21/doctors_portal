import logo from "./logo.svg";
import "./App.css";

import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import AddPatient from "./Pages/AddPatient/AddPatient";
import DrugList from "./Pages/DrugList/DrugList";
import ElementList from "./Pages/ElementList/ElementList";
import Register from "./Pages/Authentication/Register";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import AddPrescription from "./Pages/Prescription/AddPrescription";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OutletWithNavbarAndFooter />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="drugList" element={<DrugList />} />
          <Route path="elementList" element={<ElementList />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/addPrescription" element={<AddPrescription />} />
      </Routes>
    </div>
  );
}

export default App;
function OutletWithNavbarAndFooter() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
