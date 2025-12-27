export const todoStatus = ['completed', 'progress', 'planned'] as const;

export type TodoStatus = (typeof todoStatus)[number];

export type Todo = {
  id: number;
  title: string;
  detail: string | null;
  deadline: string | null;
  status: TodoStatus;
  createdAt: string;
  updatedAt: string;
};

export type PostTodoRequest = {
  title: Todo['title'];
  detail?: Todo['detail'];
  deadline?: Todo['deadline'];
};
