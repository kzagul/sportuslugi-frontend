import { IInstitution } from "./institution";

export interface Role {
  id: string;
  name: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  last_name?: string;
  father_name?: string;
  gender?: string;
  birth_date?: any;
  is_moderator?: boolean;
  verified_moderator?: boolean;
  moderator_of?: string;
  roles: Role[];
}

export type UserWithoutPassword = Omit<User, "password">;

export interface UserTest {
  id: string;
  email: string;
  name: string;
  last_name: string; // добавить
  father_name: string; // добавить
  gender: string; // добавить
  birth_date: string; // добавить
  image?: string; // Может убрать ---
  roles: Role[];
  isOrganization?: boolean;
  organization?: IInstitution;
}
