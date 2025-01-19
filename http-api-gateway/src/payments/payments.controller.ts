import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/CreatePayment.dto";

@Controller("payments")
export class PaymenetsController {
  constructor(@Inject("NATS_SERVICE") private natsClient: ClientProxy) {}

  @Post()
  createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    return this.natsClient.emit("createPayment", createPaymentDto);
  }
}
