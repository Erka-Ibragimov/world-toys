import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class RegistrationModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  login: string;
  @Column()
  password: string;
  @Column()
  repeatPassword: string;
  @Column()
  phone: number;
  @Column()
  email: string;
  @Column({default:false})
  isActicated: boolean;
}
