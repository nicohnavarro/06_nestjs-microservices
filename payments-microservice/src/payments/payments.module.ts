import { Module } from '@nestjs/common';
import { PaymentsMicroservceController } from './payments.controller';

@Module({
  imports: [],
  controllers: [PaymentsMicroservceController],
  providers: [],
})
export class PaymentsModule {}
