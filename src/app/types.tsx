import { DateType } from "react-tailwindcss-datepicker";


export interface Contest {
    name?: string,
    author?: number,
    hostedOnPlatoform?: boolean,
    restrictUsersOnRegion?: string | undefined,
    restrictUsersOnGroup?: string | undefined,
    restrictUsersSchool?: boolean,
    restrictUsersStudents?: boolean,
    restrictUsersMinAge?: number,
    restrictUsersMaxAge?: number
    restrictUsersLimit?: number,
    hasAward?: boolean,
    startDate?: DateType,
    endDate?: DateType,
    description?: string,
    location?: string,
    links?: { Instagram: string, Facebook: string, LinkedIn: string, GitHub: string }
    bannerURL?: string,
    regulationsURL?: string,
    regulationsPDF?: boolean
    //add payment via stripa/paypal
}

