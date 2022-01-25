import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { ProductCategory } from '../entities/product_category.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepo: Repository<ProductCategory>,
  ) {}

  async getAll(): Promise<ProductCategory[]> {
    return await this.productCategoryRepo.find();
  }
}
