import { Module } from "@nestjs/common";
import { NatsClientModule } from "src/nats-client/nats-client.module";
import { PaymenetsController } from "./payments.controller";

@Module({
  imports: [NatsClientModule],
  controllers: [PaymenetsController],
  providers: [],
})
export class PaymentsModule {}
