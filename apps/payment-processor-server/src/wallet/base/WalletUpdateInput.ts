/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { LedgerEntryWhereUniqueInput } from "../../ledgerEntry/base/LedgerEntryWhereUniqueInput";
import { Type } from "class-transformer";
import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WalletUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string | null;

  @ApiProperty({
    required: false,
    type: () => LedgerEntryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LedgerEntryWhereUniqueInput)
  @IsOptional()
  @Field(() => LedgerEntryWhereUniqueInput, {
    nullable: true,
  })
  ledgerEntry?: LedgerEntryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutWalletsInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutWalletsInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutWalletsInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutWalletsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { WalletUpdateInput as WalletUpdateInput };
