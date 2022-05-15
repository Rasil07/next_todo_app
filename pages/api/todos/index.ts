import http from "../../../utils/http";

import { API } from "../../../constants/api";
import { TodoPayload } from "../../../constants/type";
const { TODO } = API;

export const fetchTodos = async ():Promise<Group[]> => {
  const response = await http.get(TODO.LIST);
  return response.data;
};

export const createTodo = async(payload:TodoPayload)=>{
  return http.post(TODO.CREATE,payload)
}
