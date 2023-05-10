import { IGeo } from "./geo";
import { IService } from "./service";
import { ISport } from "./sport";
import { User } from "./user";

export interface IInstitution {
  id: number;
  name: string;
  literal?: string;
  inn?: string;
  email?: string;
  contactuser?: User;
  contactUsers?: User[];
  phone?: string;
  website: string;
  address?: string;
  workingTime?: string;
  description?: string;
  images?: string[];
  coordinates?: IGeo;
  services?: IService[];
  sports?: ISport[];
}
