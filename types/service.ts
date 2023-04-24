import { IInstitution } from "./institution";
import { ISport } from "./sport";

export interface IService {
  id: string;
  name: string;
  institutions: IInstitution[];
  sports: ISport[];
}
