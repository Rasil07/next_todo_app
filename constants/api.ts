export const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

const TODOS = "/todos";

export const API = {
  TODO: {
    CREATE: TODOS,
    GET_BY_ID: (id: string): string => `${TODOS}/${id}`,
    LIST: TODOS,
    UPDATE: (id: string): string => API.TODO.GET_BY_ID(id),
    DELETE: (id: string): string => API.TODO.GET_BY_ID(id),
  },
};
