import { Connection, ViewColumn, ViewEntity } from 'typeorm';
import { Category } from './category.entity';
import { Product } from './product.entity';

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select('product.id', 'id')
      .addSelect('product.name', 'product_name')
      .addSelect('category.name', 'category_name')
      .from(Product, 'product')
      .leftJoin(Category, 'category', 'category.id = product.category_id'),
})
export class ProductCategory {
  @ViewColumn()
  id: number;

  @ViewColumn()
  product_name: string;

  @ViewColumn()
  category_name: string;
}
