import { Routes, Route } from "react-router-dom"

// Admin Pages
import { Services } from "./pages/Admin/Services"
import { Houses } from "./pages/Admin/Houses"
import { HouseDetails } from "./pages/Admin/HouseDetails"

import { ServiceDetails } from "./pages/Admin/ServiceDetails"
import { Announcement } from "./pages/Admin/Announcement"

import { AnnoucementByID } from "./pages/Admin/AnnoucementByID"

import { Complaint } from "./pages/Admin/Complaint"
import { ComplaintDetails } from "./pages/Admin/ComplaintDetails"

import { ComplaintResident } from "./pages/Resident/ComplaintResident"
import { ComplaintResidentDetails } from "./pages/Resident/ComplaintResidentDetails"

import { AnnouncementResident } from "./pages/Resident/AnnouncementResident"

import { ResidentHouseDetails } from "./pages/Resident/ResidentHouseDetails"

import Emergencies from "./pages/Resident/Emergencies"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/services" element={<Services />} />
        <Route path="/admin/houses" element={<Houses />} />
        <Route path="/admin/house/:id" element={<HouseDetails />} />

        <Route path="/admin/announce" element={<Announcement />} />
        <Route path="/admin/complaints" element={<Complaint />} />
        <Route path="/admin/complaints/:id" element={<ComplaintDetails />} />
        <Route path="/admin/services/:id" element={<ServiceDetails />} />

        <Route path="resident/announce" element={ <AnnouncementResident /> }/>
        <Route path="/resident/complaints" element={<ComplaintResident />} />
        <Route path="/resident/complaints/:id" element={<ComplaintResidentDetails />} />
        <Route path="/resident/house/:id" element={<ResidentHouseDetails />} />

        <Route path="/resident/emergencies" element={<Emergencies />} />

      </Routes>
    </div>
  )
}

export default App
