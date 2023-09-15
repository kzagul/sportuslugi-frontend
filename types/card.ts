// import { IItem } from "./item";
import { ISport } from "./sport";

export interface ICard {
  id: number;
  name: string;
  userId: number;
  username: string;
  favoriteSports: ISport[];
}
