import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './typeorm/entities/Payment';
import { ConfigModule } from '@nestjs/config';
import { User } from './typeorm/entities/User';

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
      entities: [Payment, User],
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    }),
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
