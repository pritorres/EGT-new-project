import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: boolean;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
