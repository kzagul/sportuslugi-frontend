import { IInstitution } from "./institution";

export interface Role {
  id: string;
  name: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  roles: Role[];
}

export type UserWithoutPassword = Omit<User, "password">;

export interface UserTest {
  id: string;
  email: string;
  name: string;
  roles: Role[];
  isOrganization?: boolean;
  organization?: IInstitution;
}
