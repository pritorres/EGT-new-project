import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto, UpdateBrandDto } from 'src/dto/brand.dto';
import { BrandProductView } from 'src/entities/brand_product.view';
import { Repository } from 'typeorm';

@Injectable()
export class BrandProductService {
  constructor(
    @InjectRepository(BrandProductView)
    private readonly brandRepo: Repository<BrandProductView>,
  ) {}

  async getAll(): Promise<BrandProductView[]> {
    const supplier = this.brandRepo.find();
    return await supplier;
  }

  async getOne(id: number): Promise<BrandProductView> {
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

  async create(body: CreateBrandDto): Promise<BrandProductView> {
    return await this.brandRepo.save(body);
  }

  async update(id: number, body: UpdateBrandDto): Promise<BrandProductView> {
    return await this.brandRepo.save({
      id,
      ...body,
    });
  }

  async delete(id: number): Promise<void> {
    await this.brandRepo.delete(id);
  }
}
