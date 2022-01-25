import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Product } from 'src/entities/product.entity';
import { ProductCategory } from 'src/entities/product_category.entity';
import { ProductCategoryService } from 'src/services/product-category.service';
import { ProductController } from '../controlllers/product.controller';
import { ProductService } from '../services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductCategory, Category])],
  controllers: [ProductController],
  providers: [ProductService, ProductCategoryService],
})
export class ProductModule {}
