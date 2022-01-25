import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class createCategoryDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateCategoryDto extends PartialType(createCategoryDto) {}
