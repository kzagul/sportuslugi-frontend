import { IInstitution } from "./institution";
import { ISport } from "./sport";
import { IItem } from "./item";

export interface IService {
  id: number;
  name: string;
  literal?: string;
  type?: IItem[];
  description?: string;
  duration?: string;
  schedule?: string;
  isFree?: boolean;
  price?: IItem[];
  difficulty?: string;
  trainer?: IItem[];
  requirements?: IItem[]; // требования
  institutions?: IInstitution[];
  sports?: ISport[];
}
