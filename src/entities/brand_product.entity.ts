import { ViewEntity, ViewColumn, Connection } from 'typeorm';
import { Brand } from '../entities/brand.entity';
import { Product } from '../entities/product.entity';

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select('brand.id', 'id')
      .addSelect('brand.name', 'brand_name')
      .addSelect('product.name', 'product_name')
      .from(Brand, 'brand')
      .leftJoin(Product, 'product', 'product.id = brand.product_id'),
})
export class BrandProduct {
  @ViewColumn()
  id: number;

  @ViewColumn()
  name_brand: string;

  @ViewColumn()
  name_product: string;
}
