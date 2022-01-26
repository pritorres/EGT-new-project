import { ViewEntity, ViewColumn, Connection } from 'typeorm';
import { BrandProduct } from '../entities/brand_product.entity';
import { Product } from '../entities/product.entity';
import { Brand } from './brand.entity';

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select('brand.id', 'id')
      .addSelect('brand.name', 'name_brand')
      .addSelect('product.name', 'name_product')
      .from(BrandProduct, 'brandProduct')
      .leftJoin(Product, 'product', 'product.id = brandProduct.product_id')
      .leftJoin(Brand, 'brand', 'brand.id = brandProduct.brand_id'),
})
export class BrandProductView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  name_brand: string;

  @ViewColumn()
  name_product: string;
}
