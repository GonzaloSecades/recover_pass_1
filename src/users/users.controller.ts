import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dto/return-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Role } from '../auth/role.decorator';
import { UserRole } from './user-roles.enum';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  async createAdminUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.createAdminUser(createUserDto);
    return {
      user,
      message: 'Administrador creado satisfactoriamente',
    };
  }
}
//El parametro de @Controller 'controlara' las operaciones en
// localhost:3000/users (o lo que sea que este entre parentesis)

// @Controller('users')
// export class UsersController {
//   constructor(private usersService: UsersService) {}

//   @Post()
//   async createAdminUser(
//     @Body() createUserDto: CreateUserDto,
//   ): Promise<ReturnUserDto> {
//     const user = await this.usersService.createAdminUser(createUserDto);
//     return {
//       user,
//       message: 'Administrador cadastrado com sucesso',
//     };
//   }
// }
