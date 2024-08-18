/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LedgerEntryService } from "../ledgerEntry.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LedgerEntryCreateInput } from "./LedgerEntryCreateInput";
import { LedgerEntry } from "./LedgerEntry";
import { LedgerEntryFindManyArgs } from "./LedgerEntryFindManyArgs";
import { LedgerEntryWhereUniqueInput } from "./LedgerEntryWhereUniqueInput";
import { LedgerEntryUpdateInput } from "./LedgerEntryUpdateInput";
import { WalletFindManyArgs } from "../../wallet/base/WalletFindManyArgs";
import { Wallet } from "../../wallet/base/Wallet";
import { WalletWhereUniqueInput } from "../../wallet/base/WalletWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LedgerEntryControllerBase {
  constructor(
    protected readonly service: LedgerEntryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LedgerEntry })
  @nestAccessControl.UseRoles({
    resource: "LedgerEntry",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createLedgerEntry(
    @common.Body() data: LedgerEntryCreateInput
  ): Promise<LedgerEntry> {
    return await this.service.createLedgerEntry({
      data: {
        ...data,

        transaction: data.transaction
          ? {
              connect: data.transaction,
            }
          : undefined,
      },
      select: {
        amount: true,
        createdAt: true,
        id: true,
        ledgerAmount: true,
        ledgerTimestamp: true,
        ledgerType: true,
        timestamp: true,

        transaction: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [LedgerEntry] })
  @ApiNestedQuery(LedgerEntryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LedgerEntry",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ledgerEntries(@common.Req() request: Request): Promise<LedgerEntry[]> {
    const args = plainToClass(LedgerEntryFindManyArgs, request.query);
    return this.service.ledgerEntries({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        ledgerAmount: true,
        ledgerTimestamp: true,
        ledgerType: true,
        timestamp: true,

        transaction: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LedgerEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LedgerEntry",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ledgerEntry(
    @common.Param() params: LedgerEntryWhereUniqueInput
  ): Promise<LedgerEntry | null> {
    const result = await this.service.ledgerEntry({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        ledgerAmount: true,
        ledgerTimestamp: true,
        ledgerType: true,
        timestamp: true,

        transaction: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LedgerEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LedgerEntry",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateLedgerEntry(
    @common.Param() params: LedgerEntryWhereUniqueInput,
    @common.Body() data: LedgerEntryUpdateInput
  ): Promise<LedgerEntry | null> {
    try {
      return await this.service.updateLedgerEntry({
        where: params,
        data: {
          ...data,

          transaction: data.transaction
            ? {
                connect: data.transaction,
              }
            : undefined,
        },
        select: {
          amount: true,
          createdAt: true,
          id: true,
          ledgerAmount: true,
          ledgerTimestamp: true,
          ledgerType: true,
          timestamp: true,

          transaction: {
            select: {
              id: true,
            },
          },

          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LedgerEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LedgerEntry",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLedgerEntry(
    @common.Param() params: LedgerEntryWhereUniqueInput
  ): Promise<LedgerEntry | null> {
    try {
      return await this.service.deleteLedgerEntry({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          ledgerAmount: true,
          ledgerTimestamp: true,
          ledgerType: true,
          timestamp: true,

          transaction: {
            select: {
              id: true,
            },
          },

          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wallets")
  @ApiNestedQuery(WalletFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Wallet",
    action: "read",
    possession: "any",
  })
  async findWallets(
    @common.Req() request: Request,
    @common.Param() params: LedgerEntryWhereUniqueInput
  ): Promise<Wallet[]> {
    const query = plainToClass(WalletFindManyArgs, request.query);
    const results = await this.service.findWallets(params.id, {
      ...query,
      select: {
        balance: true,
        createdAt: true,
        currency: true,
        id: true,

        ledgerEntry: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wallets")
  @nestAccessControl.UseRoles({
    resource: "LedgerEntry",
    action: "update",
    possession: "any",
  })
  async connectWallets(
    @common.Param() params: LedgerEntryWhereUniqueInput,
    @common.Body() body: WalletWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wallets: {
        connect: body,
      },
    };
    await this.service.updateLedgerEntry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wallets")
  @nestAccessControl.UseRoles({
    resource: "LedgerEntry",
    action: "update",
    possession: "any",
  })
  async updateWallets(
    @common.Param() params: LedgerEntryWhereUniqueInput,
    @common.Body() body: WalletWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wallets: {
        set: body,
      },
    };
    await this.service.updateLedgerEntry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wallets")
  @nestAccessControl.UseRoles({
    resource: "LedgerEntry",
    action: "update",
    possession: "any",
  })
  async disconnectWallets(
    @common.Param() params: LedgerEntryWhereUniqueInput,
    @common.Body() body: WalletWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wallets: {
        disconnect: body,
      },
    };
    await this.service.updateLedgerEntry({
      where: params,
      data,
      select: { id: true },
    });
  }
}
