import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractModel } from "./AbstractModel";
import { Category } from "./Category";
@Entity("product")
export class Product extends AbstractModel {


  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column()
  category_id: string

  @ManyToOne(type => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  brand: string;

  @Column({ name: "sale_price", nullable: true })
  salePrice: number;

  @Column({ nullable: true })
  observation: string;



  constructor() {
    super()
  }
}
