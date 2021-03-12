import { Patient } from "./patient.model";

export interface Patients extends Patient  {
  id: number;
  registeredDate: Date;

}
