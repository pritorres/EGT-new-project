import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandProduct } from 'src/entities/brand_product.entity';
import { BrandProductView } from 'src/entities/brand_product.view';
import { Category } from 'src/entities/category.entity';
import { Product } from 'src/entities/product.entity';
import { ProductCategory } from 'src/entities/product_category.entity';
import { BrandProductService } from 'src/services/brand-product.service';
import { ProductCategoryService } from 'src/services/product-category.service';
import { ProductController } from '../controlllers/product.controller';
import { ProductService } from '../services/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductCategory,
      Category,
      BrandProduct,
      BrandProductView,
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductCategoryService, BrandProductService],
})
export class ProductModule {}
