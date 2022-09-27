  import { CreateUserDTO } from "./CreateUserDTO";

  export interface User extends CreateUserDTO {
    id: number;
    email: string;
    name: string;
    status?: "Happy" | "Sad";
    phoneNumbers: string[];
  }
  