import { validateOrReject } from "class-validator";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Image } from "./image.entity";

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @OneToOne(() => Image, (image) => image.post, { cascade: true })
  @JoinColumn({ name: 'image' },)
  image: Image

  @CreateDateColumn({ name: 'create_at' })
  createAt: Date

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: Date

  @Column()
  likes: number

  @BeforeInsert()
  @BeforeUpdate()
  async validation() {
    await validateOrReject(this)
  }
}