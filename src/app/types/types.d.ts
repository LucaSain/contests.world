import { DateType } from "react-tailwindcss-datepicker";

export interface Contest {
  name: string;
  author: string;
  // hostedOnPlatoform?: boolean;
  // restrictUsersOnRegion?: string;
  // restrictUsersOnGroup?: string;
  restrictUsersSchool?: boolean;
  restrictUsersStudents?: boolean;
  // restrictUsersMinAge?: number;
  // restrictUsersMaxAge?: number;
  // restrictUsersLimit?: number;
  hasAward?: boolean;
  startDate?: Date;
  endDate?: Date;
  description?: string;
  location?: string;

  Instagram?: string;
  Facebook?: string;
  LinkedIn?: string;
  // GitHub?: string;

  logoURL?: string;
  regulationsURL?: string;
  // regulationsPDF?: boolean;
  //add payment via stripa/paypal
}
