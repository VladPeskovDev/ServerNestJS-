import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Создаем юзера
  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  // Получаем всех юзеров
  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  // Получаем юзера по id
  async getUserById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Обновление юзера
  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Удаляем юзера
  async deleteUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
