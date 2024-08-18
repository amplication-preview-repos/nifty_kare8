/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LedgerEntryWhereUniqueInput } from "../../ledgerEntry/base/LedgerEntryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LedgerEntryUpdateManyWithoutTransactionsInput {
  @Field(() => [LedgerEntryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LedgerEntryWhereUniqueInput],
  })
  connect?: Array<LedgerEntryWhereUniqueInput>;

  @Field(() => [LedgerEntryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LedgerEntryWhereUniqueInput],
  })
  disconnect?: Array<LedgerEntryWhereUniqueInput>;

  @Field(() => [LedgerEntryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LedgerEntryWhereUniqueInput],
  })
  set?: Array<LedgerEntryWhereUniqueInput>;
}

export { LedgerEntryUpdateManyWithoutTransactionsInput as LedgerEntryUpdateManyWithoutTransactionsInput };
