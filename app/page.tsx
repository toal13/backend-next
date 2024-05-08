import TodoForm from "./compornent/TodoForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2">
      <h1 className="text-2xl">Todo list</h1>
      <ul>
        <li>Cooking</li>
        <li>Gym</li>
        <li>Shopping</li>
      </ul>
      <TodoForm />
    </main>
  );
}
