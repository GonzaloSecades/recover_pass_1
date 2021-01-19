import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Ingrese una direccion de mail',
  })
  @IsEmail(
    {},
    {
      message: 'Ingrese una direccion valida',
    },
  )
  @MaxLength(200, {
    message: 'La direccion de mail debe tener menos de 200 caracteres',
  })
  email: string;

  @IsNotEmpty({
    message: 'Ingrese el nombre de usuario',
  })
  @MaxLength(200, {
    message: 'El nombre debe tener menos de 200 caracteres',
  })
  name: string;

  @IsNotEmpty({
    message: 'Ingrese una password',
  })
  @MinLength(6, {
    message: 'La contrase;a debe tener al menos 6 caracteres',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'La contrasena debe tener al menos una letra minuscula, una mayuscula,un numero y un simbolo',
  })
  password: string;

  @IsNotEmpty({
    message: 'Ingrese la confirmacion de la contrase;a',
  })
  @MinLength(6, {
    message: 'La contrase;a debe tener al menos 6 caracteres',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'La contrasena debe tener al menos una letra minuscula, una mayuscula,un numero y un simbolo',
  })
  passwordConfirmation: string;
}
