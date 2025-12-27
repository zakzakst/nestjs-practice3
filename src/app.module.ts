import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TodosModule, AuthModule, UsersModule],
})
export class AppModule {}
