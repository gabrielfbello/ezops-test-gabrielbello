import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsArray, IsInt } from "class-validator";

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  _id: any;

  @Column("int", { nullable: false })
  referenceId: number;

  @Column({ nullable: false, length: 500 })
  title: string;

  @IsInt()
  @Column("int", { nullable: false })
  year: number;

  @IsInt()
  @Column("int", { nullable: false })
  runtime: number;

  @IsArray()
  @Column({ nullable: false })
  genres: Array<string>;

  @Column({ nullable: true, default: null })
  director: string;

  @Column({ nullable: true, default: null })
  actors: string;

  @Column({ nullable: true, default: null })
  plot: string;

  @Column({ nullable: true, default: null })
  posterUrl: string;
}
