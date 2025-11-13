export default function PatientCard({ patient }) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold mb-2 text-blue-400">
          {patient.name}
        </h3>
        <p className="text-gray-300">Edad: {patient.age}</p>
        <p className="text-gray-300">Número de paciente: {patient.patientNumber}</p>
      </div>
    );
  }
  