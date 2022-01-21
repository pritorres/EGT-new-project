import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async getAllProduct(): Promise<Product[]> {
    return await this.productRepo.find();
  }

  async getOneProduct(id: number): Promise<Product> {
    return await this.productRepo.findOne(id);
  }

  async createProduct(body: CreateProductDto): Promise<Product> {
    return await this.productRepo.save(body);
  }

  async upDateProduct(id: number, body: UpdateProductDto): Promise<Product> {
    return await this.productRepo.save({
      id,
      ...body,
    });
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productRepo.delete(id);
  }
}
