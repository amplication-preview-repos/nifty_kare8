import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExchangeRateModuleBase } from "./base/exchangeRate.module.base";
import { ExchangeRateService } from "./exchangeRate.service";
import { ExchangeRateController } from "./exchangeRate.controller";
import { ExchangeRateResolver } from "./exchangeRate.resolver";

@Module({
  imports: [ExchangeRateModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExchangeRateController],
  providers: [ExchangeRateService, ExchangeRateResolver],
  exports: [ExchangeRateService],
})
export class ExchangeRateModule {}
