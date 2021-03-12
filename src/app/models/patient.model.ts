import { Address } from "./address.model";

export interface Patient {
  firstName: string;
  lastName: string;
  doctorId: number;
  vatCode?: number;
  addresses: Address[];
  birthDate: Date;
  email: string;
}
