import { DateType } from "react-tailwindcss-datepicker";

export interface Contest {
  name: string;
  author: string;
  hostedOnPlatoform?: boolean;
  restrictUsersOnRegion?: string;
  restrictUsersOnGroup?: string;
  restrictUsersSchool?: boolean;
  restrictUsersStudents?: boolean;
  restrictUsersMinAge?: number;
  restrictUsersMaxAge?: number;
  restrictUsersLimit?: number;
  hasAward?: boolean;
  startDate?: DateType;
  endDate?: DateType;
  description?: string;
  location?: string;
  links: {
    Instagram?: string;
    Facebook?: string;
    LinkedIn?: string;
    GitHub?: string;
  };
  bannerURL?: string;
  regulationsURL?: string;
  regulationsPDF?: boolean;
  //add payment via stripa/paypal
}
