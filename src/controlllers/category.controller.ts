import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dto/category.dto';
import { Category } from 'src/entities/category.entity';
import { CategoryService } from 'src/services/category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAll(): Promise<Category[]> {
    return await this.categoryService.getAll();
  }

  @Post()
  async create(@Body() body: CreateCategoryDto): Promise<Category> {
    return await this.categoryService.create(body);
  }
  @Put(':id')
  async upDate(
    @Param('id') id: number,
    @Body() body: UpdateCategoryDto,
  ): Promise<Category> {
    return await this.categoryService.upDate(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.categoryService.delete(id);
  }
}
