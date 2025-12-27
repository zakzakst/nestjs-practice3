import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(dto: RegisterDto) {
    const exists = this.usersService.findByEmail(dto.email);
    if (exists) {
      throw new ConflictException('Email already exists');
    }
    const hash = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create(dto.email, hash);

    return { id: user.id, email: user.email };
  }
}
