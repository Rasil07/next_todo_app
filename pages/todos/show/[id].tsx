import { NextRouter, useRouter } from "next/router";

import React, { useEffect, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodoById, updateTodo } from "../../api/todos";

interface ExpectedQuery {
  [id: string]: string;
}
function ShowTodo() {
  const router = useRouter();
  const formRef = useRef(null);
  const queryClient = useQueryClient();
  const { id }: ExpectedQuery = router.query;
  const getTodoQuery = useQuery(["getTodo", id], () => getTodoById(id));

  const updateMutation = useMutation(updateTodo, {
    onSuccess: (data, variables, context) => {
      formRef.current.reset();
      queryClient.invalidateQueries(["getTodo", id]);
      // alert("Succesfully created Todo");
    },
    onError: (error, variable, context) => {
      console.log("error", error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);

      const payload = {
        name: formData.get("name"),
        description: formData.get("description"),
      };
      console.log({ payload });

      return updateMutation.mutate({ id, payload });
    } catch (err) {
      console.log({ err });
    }
  };
  if (getTodoQuery.isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      Todo id : {id}
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>Name :</label>
        <input
          type="text"
          name="name"
          required
          defaultValue={getTodoQuery.data?.name}
        />
        <label>Description :</label>
        <textarea
          name="description"
          rows={5}
          defaultValue={getTodoQuery.data?.description}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ShowTodo;
