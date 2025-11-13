import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <React.StrictMode>
      <div className="min-h-screen bg-[#1e1e1e] text-gray-100">
        <Navbar />
        <main className="flex justify-center items-center min-h-[80vh] p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<Patients />} />
          </Routes>
        </main>
      </div>
    </React.StrictMode>
  );
}

