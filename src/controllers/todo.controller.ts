import type { Request, Response } from "express";
import {createTodo as createTodoService, 
    getTodoById, getTodos,
    updateTodo as updateTodoService, 
    deleteTodo as deleteTodoService } from "../services/todo.service.js";
import type { UpdateTodoInput } from "../types/todo.types.js";
export async function getAllTodos(
  _req: Request,
  res: Response
): Promise<void> {
  try {
    const todos = await getTodos();

    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);

    res.status(500).json({
      message: "Failed to fetch todos",
    });
  }
}

export async function createTodo(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { title } = req.body;

    if (!title || typeof title !== "string" || !title.trim()) {
      res.status(400).json({
        message: "Todo title is required",
      });
      return;
    }

    const todo = await createTodoService(title.trim());

    res.status(201).json(todo);
  } catch (error) {
    console.error("Error creating todo:", error);

    res.status(500).json({
      message: "Failed to create todo",
    });
  }
}

export async function getTodo(
  req: Request<{ id: string }>,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;

    const todo = await getTodoById(id);

    if (!todo) {
      res.status(404).json({
        message: "Todo not found",
      });
      return;
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error("Error fetching todo:", error);

    res.status(500).json({
      message: "Failed to fetch todo",
    });
  }
}

export async function updateTodo(
  req: Request<{ id: string }>,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;

    const updates: UpdateTodoInput = {};

    if (req.body.title !== undefined) {
      if (
        typeof req.body.title !== "string" ||
        !req.body.title.trim()
      ) {
        res.status(400).json({
          message: "Todo title cannot be empty",
        });
        return;
      }

      updates.title = req.body.title.trim();
    }

    if (req.body.completed !== undefined) {
      if (typeof req.body.completed !== "boolean") {
        res.status(400).json({
          message: "Completed must be a boolean",
        });
        return;
      }

      updates.completed = req.body.completed;
    }

    if (Object.keys(updates).length === 0) {
      res.status(400).json({
        message: "No valid fields provided for update",
      });
      return;
    }

    const todo = await updateTodoService(id, updates);

    if (!todo) {
      res.status(404).json({
        message: "Todo not found",
      });
      return;
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error("Error updating todo:", error);

    res.status(500).json({
      message: "Failed to update todo",
    });
  }
}

export async function deleteTodo(
  req: Request<{ id: string }>,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;

    const todo = await deleteTodoService(id);

    if (!todo) {
      res.status(404).json({
        message: "Todo not found",
      });
      return;
    }

    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting todo:", error);

    res.status(500).json({
      message: "Failed to delete todo",
    });
  }
}