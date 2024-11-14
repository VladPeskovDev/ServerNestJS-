// src/user/user.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete, Sse } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { interval, map } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: Prisma.UserCreateInput) {
    return this.userService.createUser(data);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  // SSE для получения пользователей в режиме реального времени
  @Sse('stream')
  streamUsers() {
    return interval(1000).pipe(
      map(async () => ({
        data: await this.userService.getAllUsers(),
      })),
    );
  }
}
