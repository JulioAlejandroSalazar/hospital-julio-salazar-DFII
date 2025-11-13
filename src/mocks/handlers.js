import { http, HttpResponse } from "msw";
import { patients } from "./data/patients";

export const handlers = [
  http.get("/api/patients", () => {
    return HttpResponse.json({ data: patients }, { status: 200 });
  }),

  http.get("/api/patients/:patientNumber", ({ params }) => {
    const { patientNumber } = params;
    const p = patients.find(pt => String(pt.patientNumber) === String(patientNumber));
    if (!p) {
      return HttpResponse.json({ error: "Paciente no encontrado" }, { status: 404 });
    }
    return HttpResponse.json({ data: p }, { status: 200 });
  }),
];
