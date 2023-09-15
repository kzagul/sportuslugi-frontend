import { IService } from "./service";
import { IInstitution } from "./institution";

export interface ISport {
  id: number;
  name: string;
  type?: string;
  categories?: Array<string>;
  services?: IService[];
  institutions?: IInstitution[];
  popularity?: number;
}
