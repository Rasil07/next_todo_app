import { NextPage } from "next";
import React from "react";
import { useQuery } from "react-query";
import { fetchTodos } from "../../api/todos";
import { TodoListInterface } from "../../../constants/type";

const Index: NextPage = () => {
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
          </div>
        ))}{" "}
    </div>
  );
};

export default Index;
