import { TodoModel } from "../models/todo.model.js";
import type { UpdateTodoInput } from "../types/todo.types.js";
export async function createTodo(title: string) {
  return TodoModel.create({
    title,
  });
}
export async function getTodos() {
  return TodoModel.find().sort({ createdAt: -1 });
}

export async function getTodoById(id: string) {
  return TodoModel.findById(id);
}

export async function updateTodo(
  id: string,
  updates: UpdateTodoInput
) {
  return TodoModel.findByIdAndUpdate(
    id,
    updates,
    {
    //   new: true,
      returnDocument: "after",
      runValidators: true,
    }
  );
}

export async function deleteTodo(id: string) {
  return TodoModel.findByIdAndDelete(id);
}