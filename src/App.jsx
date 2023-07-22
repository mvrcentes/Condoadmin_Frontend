import { Routes, Route } from "react-router-dom"

// Admin Pages
import { Services } from "./pages/Admin/Services"
import { Houses } from "./pages/Admin/Houses"
import { HouseDetails } from "./pages/Admin/HouseDetails"

import { ServiceDetails } from "./pages/Admin/ServiceDetails"
import { Announcement } from "./pages/Admin/Announcement"

import { AnnoucementByID } from "./pages/Admin/AnnoucementByID"

import { Complaint } from "./pages/Admin/Complaint"


import "./App.css"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/admin/services" element={<Services />} />
                <Route path="/admin/houses" element={<Houses />} />
                <Route path="/admin/house/:id" element={<HouseDetails />} />
                <Route path="/admin/announce" element={<Announcement />} />
                <Route path="/admin/announce/:id" element={<AnnoucementByID />} />
                <Route path="/admin/complaints" element={<Complaint />} />
                <Route path="/admin/services/:id" element={<ServiceDetails />} />

            </Routes>
        </div>
    )
}

export default App
