import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Supplier } from 'src/entities/supplier.entity';
import { Repository } from 'typeorm';
import { CreateSupplierDto, UpdateSupplierDto } from '../dto/supplier.dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepo: Repository<Supplier>,
  ) {}

  async getAllSupplier(): Promise<Supplier[]> {
    const supplier = this.supplierRepo.find();
    return await supplier;
  }

  async getOneSupplier(id: number): Promise<Supplier> {
    return this.supplierRepo
      .createQueryBuilder('sup')
      .innerJoinAndMapOne(
        'sup.product',
        Product,
        'prod',
        'sup.productId = prod.id',
      )
      .where('sup.id = :id', { id })
      .getOneOrFail();
  }

  async createSupplier(body: CreateSupplierDto): Promise<Supplier> {
    return await this.supplierRepo.save(body);
  }

  async upDateSupplier(id: number, body: UpdateSupplierDto): Promise<Supplier> {
    return await this.supplierRepo.save({
      id,
      ...body,
    });
  }

  async deleteSupplier(id: number): Promise<void> {
    await this.supplierRepo.delete(id);
  }
}
