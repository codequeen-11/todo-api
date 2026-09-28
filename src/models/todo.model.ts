import { Schema, model } from "mongoose";
import type { Todo } from "../types/todo.types.js";

const todoSchema = new Schema<Todo>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 200,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TodoModel = model<Todo>("Todo", todoSchema);