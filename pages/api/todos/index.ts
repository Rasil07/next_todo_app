import http from "../../../utils/http";
import { API } from "../../../constants/api";
import { TodoPayload } from "../../../constants/type";
const { TODO } = API;

export const fetchTodos = async (): Promise<Group[]> => {
  const response = await http.get(TODO.LIST);
  return response.data;
};
export const getTodoById = async (id: string) => {
  const res = await http.get(TODO.GET_BY_ID(id));
  return res.data;
};
export const createTodo = async (payload: TodoPayload) => {
  return http.post(TODO.CREATE, payload);
};
export const deleteTodo = async (id: string) => {
  return http.delete(TODO.DELETE(id));
};
export const updateTodo = async ({
  id,
  payload,
}: {
  id: string;
  payload: TodoPayload;
}) => {
  console.log({ id, payload });
  const response = await http.patch(TODO.UPDATE(id), payload);
  return response.data;
};
