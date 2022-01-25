import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dto/category.dto';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    const category = this.categoryRepo.find();
    return await category;
  }

  /* async getOne(id: number): Promise<Category> {
    return this.categoryRepo
      .createQueryBuilder('sup')
      .innerJoinAndMapOne(
        'sup.product',
        Product,
        'prod',
        'sup.productId = prod.id',
      )
      .where('sup.id = :id', { id })
      .getOneOrFail();
  } */

  async create(body: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepo.save(body);
  }

  async upDate(id: number, body: UpdateCategoryDto): Promise<Category> {
    return await this.categoryRepo.save({
      id,
      ...body,
    });
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepo.delete(id);
  }
}
