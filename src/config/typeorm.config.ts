import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gon',
  password: '2864',
  database: 'medium',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  dropSchema: true,
};
