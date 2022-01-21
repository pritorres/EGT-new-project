import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('supplier')
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 100 })
  description: string;

  @Column()
  stock: boolean;

  @Column()
  products: string;
}
