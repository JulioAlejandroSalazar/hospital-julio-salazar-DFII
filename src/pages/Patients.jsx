import React, { useEffect, useState } from "react";
import { fetchPatients } from "../api/patientApi";
import PatientCard from "../components/PatientCard";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchPatients()
      .then(data => {
        if (mounted) setPatients(data);
      })
      .catch(err => {
        if (mounted) setError(err.message || "Error");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => (mounted = false);
  }, []);

  if (loading) return <div className="text-center mt-20">Cargando pacientes...</div>;
  if (error) return <div className="text-red-600 text-center mt-20">Error: {error}</div>;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Lista de Pacientes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map(p => (
          <PatientCard key={p.patientNumber} patient={p} />
        ))}
      </div>
    </div>
  );  
}
