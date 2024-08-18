import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LedgerEntryServiceBase } from "./base/ledgerEntry.service.base";

@Injectable()
export class LedgerEntryService extends LedgerEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
