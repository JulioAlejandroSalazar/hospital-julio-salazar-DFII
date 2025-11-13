export async function fetchPatients() {
    const res = await fetch("/api/patients");
    if (!res.ok) {
      throw new Error("Error al obtener pacientes");
    }
    const json = await res.json();
    return json.data;
  }
  
  export async function fetchPatientByNumber(patientNumber) {
    const res = await fetch(`/api/patients/${patientNumber}`);
    if (!res.ok) {
      throw new Error("Paciente no encontrado");
    }
    const json = await res.json();
    return json.data;
  }
  