import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductService } from '../services/product.service';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProduct(): Promise<Product[]> {
    return await this.productService.getAllProduct();
  }

  @Get(':id')
  async getOneProduct(@Param('id') id: number): Promise<Product> {
    const index = await this.productService.getOneProduct(id);
    if (!index) {
      throw new NotFoundException(`product ${id} not found`);
    }

    return index;
  }

  @Post()
  async createProduct(@Body() body: CreateProductDto): Promise<Product> {
    return await this.productService.createProduct(body);
  }
  @Put(':id')
  async upDateProduct(
    @Param('id') id: number,
    @Body() body: UpdateProductDto,
  ): Promise<Product> {
    return await this.productService.upDateProduct(id, body);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return await this.productService.deleteProduct(id);
  }
}
