import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(email: string, passwordHash: string) {
    const user: User = {
      id: this.users.length + 1,
      email,
      passwordHash,
    };
    this.users.push(user);
    return user;
  }

  findByEmail(email: string) {
    return this.users.find((u) => u.email === email);
  }
}
