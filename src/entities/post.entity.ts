import { validateOrReject } from "class-validator";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostImage } from "./post_image.entity";

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @OneToOne(() => PostImage, (postImage) => postImage.post, { cascade: true })
  @JoinColumn({ name: 'post_image_id' },)
  image: PostImage

  @CreateDateColumn({ name: 'create_at' })
  createAt: Date

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: Date

  // @Column()
  // likes: number[]

  @BeforeInsert()
  @BeforeUpdate()
  async validation() {
    await validateOrReject(this)
  }
}