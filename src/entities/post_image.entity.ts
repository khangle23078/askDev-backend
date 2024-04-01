import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity({ name: 'post_images' })
export class PostImage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  url: string

  @Column()
  public_id: string

  @OneToOne(() => Post, (post) => post.image)
  post: Post
}