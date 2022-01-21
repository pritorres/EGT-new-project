import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateSupplierDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: boolean;
  @IsString()
  @IsNotEmpty()
  @IsPositive()
  readonly Products: string;
}

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {}
