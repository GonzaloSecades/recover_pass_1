import { UserRole } from '../user-roles.enum';
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({
    message: 'Ingreses un nombre de usuario valido',
  })
  name: string;

  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'Ingrese un mail valido',
    },
  )
  email: string;

  @IsOptional()
  role: UserRole;

  @IsOptional()
  status: boolean;
}
