import Link from "next/link";
import React from "react";

function Index() {
  return (
    <nav>
      <h1>Todo App</h1>
      <Link href={"/todos/list"}>Todos</Link>
      <Link href={"/todos/create"}>Create</Link>
    </nav>
  );
}

export default Index;
