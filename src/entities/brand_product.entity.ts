import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Product } from './product.entity';

@Entity('brand_Product')
export class BrandProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand_id: number;

  @Column()
  product_id: number;

  @ManyToMany(() => Brand)
  @JoinTable({ name: 'bran_id' })
  brand: Brand;

  @ManyToMany(() => Product)
  @JoinTable({ name: 'product_id' })
  product: Product;
}
