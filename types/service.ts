import { IInstitution } from "./institution";
import { ISport } from "./sport";
import { IItem } from "./item";

export interface IService {
  id: number;
  name: string;
  literal?: string;
  type?: IItem[];
  duration?: string;
  schedule?: string;
  trainer?: IItem[];
  isFree?: boolean;
  price?: IItem[];
  difficulty?: string;
  requirements?: IItem[]; // требования
  institutions?: IInstitution[];
  sports?: ISport[];
}
