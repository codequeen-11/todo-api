export interface Todo {
  title: string;
  completed: boolean;
  id: string;
}

export interface UpdateTodoInput {
  title?: string;
  completed?: boolean;
}