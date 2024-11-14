import {
  Controller,
  Get,
  Sse,
  MessageEvent,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Создание
  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  // Получение всех
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  // SSE
  @Sse('stream')
  streamUsers(): Observable<MessageEvent> {
    return new Observable<MessageEvent>((observer) => {
      const sendUsers = async () => {
        try {
          const users = await this.userService.getAllUsers();
          observer.next({ data: users });
        } catch (error) {
          observer.error(error);
        }
      };
      sendUsers();
      const intervalId = setInterval(sendUsers, 5000);
      return () => {
        clearInterval(intervalId);
      };
    });
  }

  // Получение по ID
  @Get(':id')
  async getUserById(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 400 })) id: string) {
    return this.userService.getUserById(id);
  }

  // Обновление
  @Put(':id')
  async updateUser(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 400 })) id: string,
    @Body() data: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, data);
  }

  // Удаление
  @Delete(':id')
  async deleteUser(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 400 })) id: string) {
    return this.userService.deleteUser(id);
  }
}
