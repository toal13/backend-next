import { todos } from "./api/todos/route";
import TodoForm from "./compornent/TodoForm";

export default function Home() {
  console.log("REBUILDING", todos);
  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-2">
      <h1 className="text-2xl">Todo list</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
      <TodoForm />
    </main>
  );
}
