import { Image } from "../../AppTypes";

export interface ApiiType {
  query: string;
  page: number;
}

export interface ReturnType {
  results: Image[];
  total_pages: number;
}
export interface ParamsType {
  client_id: string;
  query: string;
  per_page: number;
  page: number;
}