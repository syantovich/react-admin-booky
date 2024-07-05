import { EUserTypeCodes } from "../enums/user";

export interface User {
  id: number;
  client_id: number;
  last_name: string;
  first_name: string;
  login: string;
  email?: string;
  person_type_code: EUserTypeCodes;
  is_blocked: boolean;
}
