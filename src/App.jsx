import { useState } from "react"
import { Routes, Route } from "react-router-dom"

// Admin Pages
import { Services } from "./pages/Admin/Services"
import { Houses } from "./pages/Admin/Houses"
import { HouseDetails } from "./pages/Admin/HouseDetails"
import { ServiceDetails } from "./pages/Admin/ServiceDetails"

import "./App.css"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/admin/services" element={<Services />} />
                <Route path="/admin/houses" element={<Houses />} />
                <Route path="/admin/house/:id" element={<HouseDetails />} />
                <Route path="/admin/services/:id" element={<ServiceDetails />} />
            </Routes>
        </div>
    )
}

export default App
