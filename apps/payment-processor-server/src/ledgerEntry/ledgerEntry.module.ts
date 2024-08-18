import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LedgerEntryModuleBase } from "./base/ledgerEntry.module.base";
import { LedgerEntryService } from "./ledgerEntry.service";
import { LedgerEntryController } from "./ledgerEntry.controller";
import { LedgerEntryResolver } from "./ledgerEntry.resolver";

@Module({
  imports: [LedgerEntryModuleBase, forwardRef(() => AuthModule)],
  controllers: [LedgerEntryController],
  providers: [LedgerEntryService, LedgerEntryResolver],
  exports: [LedgerEntryService],
})
export class LedgerEntryModule {}
