import { Module } from '@nestjs/common';
import { PaymentsMicroservceController } from './payments.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { PaymentsService } from './payments.service';
import { Payment } from 'src/typeorm/entities/Payment';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Payment]), NatsClientModule],
  controllers: [PaymentsMicroservceController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
