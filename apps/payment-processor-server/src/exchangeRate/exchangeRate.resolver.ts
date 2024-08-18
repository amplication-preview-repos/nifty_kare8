import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExchangeRateResolverBase } from "./base/exchangeRate.resolver.base";
import { ExchangeRate } from "./base/ExchangeRate";
import { ExchangeRateService } from "./exchangeRate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExchangeRate)
export class ExchangeRateResolver extends ExchangeRateResolverBase {
  constructor(
    protected readonly service: ExchangeRateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
