export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}
// import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

// export class CreateUserDto {
//   @IsNotEmpty({
//     message: 'Ingrese una direccion de correo electronico',
//   })
//   @IsEmail(
//     {},
//     {
//       message: 'Ingrese una direccion de correo electronico valida',
//     },
//   )
//   @MaxLength(200, {
//     message: 'La direccion debe tener menos de 200 caracteres',
//   })
//   email: string;

//   @IsNotEmpty({
//     message: 'Ingrese nombre de usuario',
//   })
//   @MaxLength(200, {
//     message: 'El nombre debe tener menos de 200 caracteres',
//   })
//   name: string;

//   @IsNotEmpty({
//     message: 'Ingrese una contrasenia',
//   })
//   @MinLength(6, {
//     message: 'La constrasena debe tener al menos 6 caracteres',
//   })
//   password: string;

//   @IsNotEmpty({
//     message: 'Ingrese confirmacion de la contrasenua',
//   })
//   @MinLength(6, {
//     message: 'La constrasena debe tener al menos 6 caracteres',
//   })
//   passwordConfirmation: string;
// }
