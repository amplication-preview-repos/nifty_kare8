import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LedgerEntryResolverBase } from "./base/ledgerEntry.resolver.base";
import { LedgerEntry } from "./base/LedgerEntry";
import { LedgerEntryService } from "./ledgerEntry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LedgerEntry)
export class LedgerEntryResolver extends LedgerEntryResolverBase {
  constructor(
    protected readonly service: LedgerEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
