import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto, UpdateBrandDto } from 'src/dto/brand.dto';
import { Brand } from 'src/entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepo: Repository<Brand>,
  ) {}

  async getAll(): Promise<Brand[]> {
    const supplier = this.brandRepo.find();
    return await supplier;
  }

  async getOne(id: number): Promise<Brand> {
    return this.brandRepo.findOne(id);
    /* .createQueryBuilder('brand')
      .innerJoinAndMapOne(
        'brand.product',
        Product,
        'prod',
        'sup.productId = prod.id',
      )
      .where('sup.id = :id', { id })
      .getOneOrFail(); */
  }

  async create(body: CreateBrandDto): Promise<Brand> {
    return await this.brandRepo.save(body);
  }

  async update(id: number, body: UpdateBrandDto): Promise<Brand> {
    return await this.brandRepo.save({
      id,
      ...body,
    });
  }

  async delete(id: number): Promise<void> {
    await this.brandRepo.delete(id);
  }
}
