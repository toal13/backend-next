"use client";

import { FormEvent, useState } from "react";

export default function TodoForm() {
  const [todo, setTodo] = useState("");

  const saveTodo = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ todo }),
    });
    setTodo("");
  };

  return (
    <form action="">
      <input
        type="text"
        placeholder="What are you gonna do?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>SAVE</button>
    </form>
  );
}
