import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/typeorm/entities/User';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: process.env.MYSQL_DATABASE,
      synchronize: true,
      entities: [User],
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
