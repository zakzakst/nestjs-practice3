import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo, PostTodoRequest, PutTodoRequest } from './todo.entity';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    {
      id: 1,
      title: '夕飯の材料を買う',
      detail: `
            - 肉
            - 人参
            - 醤油
        `,
      deadline: '2025-12-31T03:04:30.155Z',
      status: 'progress',
      createdAt: '2025-12-25T03:04:30.155Z',
      updatedAt: '2025-12-26T03:04:30.155Z',
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    // TODO: エラー処理
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  create(request: PostTodoRequest): Todo {
    const date = new Date();
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: request.title,
      detail: request.detail || null,
      deadline: request.deadline || null,
      status: 'planned',
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, request: PutTodoRequest): Todo {
    const todo = this.todos.find((t) => t.id === id);
    const targetTodo = todo || {
      id: 99,
      title: 'エラー',
      detail: `
        - 肉
        - 人参
        - 醤油
      `,
      deadline: '2025-12-31T03:04:30.155Z',
      status: 'progress',
      createdAt: '2025-12-25T03:04:30.155Z',
      updatedAt: '2025-12-26T03:04:30.155Z',
    };
    return {
      ...targetTodo,
      ...request,
      updatedAt: new Date().toISOString(),
    };
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return;
  }
}
