import { IGeo } from "./geo";
import { IService } from "./service";
import { ISport } from "./sport";

export interface IInstitution {
  id: number;
  name: string;
  literal?: string;
  inn?: string;
  email?: string;
  phone?: string;
  website: string;
  address?: string;
  workingTime?: string;
  description?: string;
  coordinates?: IGeo;
  services?: IService[];
  sports?: ISport[];
}
