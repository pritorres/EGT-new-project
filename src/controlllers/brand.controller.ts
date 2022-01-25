import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dto/brand.dto';
import { Brand } from 'src/entities/brand.entity';
import { BrandService } from 'src/services/brand.service';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandServices: BrandService) {}

  @Get()
  async getAll(): Promise<Brand[]> {
    return await this.brandServices.getAll();
  }

  @Post()
  async create(@Body() body: CreateBrandDto): Promise<Brand> {
    return await this.brandServices.create(body);
  }
  @Put(':id')
  async upDate(
    @Param('id') id: number,
    @Body() body: UpdateBrandDto,
  ): Promise<Brand> {
    return await this.brandServices.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.brandServices.delete(id);
  }
}
