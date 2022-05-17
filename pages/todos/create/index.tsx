import React, { useRef } from "react";
import { useMutation } from "react-query";
import { TodoPayload } from "../../../constants/type";
import { createTodo } from "../../api/todos";

const Index: React.FC = () => {
  const formRef = useRef(null);
  const mutation = useMutation(createTodo, {
    onSuccess: (data, variables, context) => {
      formRef.current.reset();
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
      return mutation.mutate(payload);
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" name="name" required />
        <label>Description :</label>
        <textarea name="description" rows={5} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Index;
