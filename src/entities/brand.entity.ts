import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brand')
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
