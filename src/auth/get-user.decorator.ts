// import { createParamDecorator } from '@nestjs/common';
// import { User } from 'src/users/user.entity';

// export const GetUser = createParamDecorator((data, req): any => {
//   const user = req.args[0].user;
//   return [data, user];
// });

import { createParamDecorator } from '@nestjs/common';
import { User } from 'src/users/user.entity';

export const GetUser = createParamDecorator(
  (data, req): User => {
    return req.user;
  },
);
