import { IInstitution } from "./institution";
import { ISport } from "./sport";

export interface IService {
  id: number;
  name: string;
  institutions?: IInstitution[];
  sports?: ISport[];
}