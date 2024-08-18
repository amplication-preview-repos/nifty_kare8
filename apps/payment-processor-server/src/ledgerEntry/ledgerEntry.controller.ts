import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LedgerEntryService } from "./ledgerEntry.service";
import { LedgerEntryControllerBase } from "./base/ledgerEntry.controller.base";

@swagger.ApiTags("ledgerEntries")
@common.Controller("ledgerEntries")
export class LedgerEntryController extends LedgerEntryControllerBase {
  constructor(
    protected readonly service: LedgerEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
