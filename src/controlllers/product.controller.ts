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
import { ProductCategory } from 'src/entities/product_category.entity';
import { BrandProductView } from 'src/entities/brand_product.view';
import { ProductCategoryService } from 'src/services/product-category.service';
import { BrandProductService } from 'src/services/brand-product.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly productCategoryServices: ProductCategoryService,
    private readonly brandProductService: BrandProductService,
  ) {}

  @Get()
  async getAllProduct(): Promise<Product[]> {
    return await this.productService.getAllProduct();
  }
  @Get('/categories')
  async getAllByCategories(): Promise<ProductCategory[]> {
    return await this.productCategoryServices.getAll();
  }
  @Get('/brand')
  async getAllBrands(): Promise<BrandProductView[]> {
    return await this.brandProductService.getAll();
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
