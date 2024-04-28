import axios, { AxiosResponse } from "axios";
import { ParamsType, ReturnType } from "./ApiiType";

const API_KEY = "zX9Q4l1kC2381w08xCDwhyDAbdYJ8nwGR4L3LvE72fk";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const Apii = async (
  query: string,
  page: number
): Promise<AxiosResponse<ReturnType>> => {
  const params: ParamsType = {
    client_id: API_KEY,
    query: query,
    per_page: 10,
    page: page,
  };
  const data = await axios.get<ReturnType>("/search/photos/", { params });
  console.log(data);

  return data;
};

export default Apii;