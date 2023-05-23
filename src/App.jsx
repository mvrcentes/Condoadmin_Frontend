import { useState } from "react"
import { Routes, Route } from "react-router-dom"

// Admin Pages
import { Services } from "./pages/Admin/Services"
import { Houses } from "./pages/Admin/Houses"
import { HouseDetails } from "./pages/Admin/HouseDetails"
import { Announcement } from "./pages/Admin/Announcement"
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
                <Route path="/admin/complaints" element={<Complaint />} />
            </Routes>
        </div>
    )
}

export default App
