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
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExchangeRateWhereUniqueInput } from "../../exchangeRate/base/ExchangeRateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LedgerEntryListRelationFilter } from "../../ledgerEntry/base/LedgerEntryListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WalletWhereUniqueInput } from "../../wallet/base/WalletWhereUniqueInput";

@InputType()
class TransactionWhereInput {
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  currency?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ExchangeRateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExchangeRateWhereUniqueInput)
  @IsOptional()
  @Field(() => ExchangeRateWhereUniqueInput, {
    nullable: true,
  })
  exchangeRate?: ExchangeRateWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => LedgerEntryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LedgerEntryListRelationFilter)
  @IsOptional()
  @Field(() => LedgerEntryListRelationFilter, {
    nullable: true,
  })
  ledgerEntries?: LedgerEntryListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  status?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  timestamp?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => WalletWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WalletWhereUniqueInput)
  @IsOptional()
  @Field(() => WalletWhereUniqueInput, {
    nullable: true,
  })
  wallet?: WalletWhereUniqueInput;
}

export { TransactionWhereInput as TransactionWhereInput };