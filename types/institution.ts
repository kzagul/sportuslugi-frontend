import { IGeo } from "./geo";
import { IService } from "./service";
import { ISport } from "./sport";

export interface IInstitution {
  id: string;
  name: string;
  coordinates: IGeo;
  services: IService[];
  sports: ISport[];
}
