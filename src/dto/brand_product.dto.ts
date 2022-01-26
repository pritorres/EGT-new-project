import { IsNotEmpty, IsNumber } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateBandProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  readonly product_id: number;

  @IsNumber()
  @IsNotEmpty()
  readonly brand_id: number;
}

export class updateBranProductDto extends PartialType(CreateBandProductDto) {}
