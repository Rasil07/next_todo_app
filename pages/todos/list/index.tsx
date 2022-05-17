import { NextPage } from "next";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteTodo, fetchTodos } from "../../api/todos";
import { TodoListInterface } from "../../../constants/type";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    data,
    error,
    isLoading,
    isError,
  }: {
    data: TodoListInterface;
    error: any;
    isLoading: boolean;
    isError: boolean;
  } = useQuery("list_todos", fetchTodos);

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries("list_todos");
    },
    onError(error, variables, context) {
      alert("error:");
    },
  });
  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h3>{error?.message}</h3>
      </div>
    );
  }

  return (
    <div>
      {" "}
      {data?.length > 0 &&
        data.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.name}</h3>

            <p>{todo.description}</p>

            <button onClick={() => deleteMutation.mutate(todo.id)}>
              Delete
            </button>
            <button
              onClick={() =>
                router.push({
                  pathname: "/todos/show/[id]",
                  query: { id: todo.id },
                })
              }
            >
              Show
            </button>
          </div>
        ))}
    </div>
  );
};

export default Index;
