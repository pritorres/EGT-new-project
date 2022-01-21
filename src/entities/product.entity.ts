import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 100, nullable: true })
  description: string;

  @Column()
  stock: boolean;

  @Column()
  price: number;

  @Column()
  image: string;
}
