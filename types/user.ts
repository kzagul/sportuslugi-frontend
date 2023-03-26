export interface User {
  id: string;
  email: string;
  name: string;
  surname: string;
  secondname?: string;
  password: string;
  roles: string[];
  image?: string;
}

export type UserWithoutPassword = Omit<User, "password">;
