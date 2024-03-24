import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity({ name: 'post_images' })
export class PostImage {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  url: string

  @Column()
  public_id: string

  @OneToOne(() => Post, (post) => post.image)
  post: Post
}