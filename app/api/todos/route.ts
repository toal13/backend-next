import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export interface Todo{
    id: string;
    todo: string;
}

export const todos: Todo[] = [
  {
    id: "1",
    todo: "cooking"
  }
];

export async function POST(req: NextResponse) {
  const jsonData = await req.json();


  const todo = { id: Date.now().toString(), ...jsonData };
  todos.push(todo);
  console.log(todos);

  revalidatePath("/")

  return NextResponse.json("👍", { status: 201 });
}
