import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Имя не должно быть пустым' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Фамилия не должна быть пустой' })
  lastName: string;
}
