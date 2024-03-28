import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity({ name: 'images' })
export class Image {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  url: string

  @Column()
  public_id: string

  @OneToOne(() => Post, (post) => post.image)
  post: Post

  @OneToOne(() => User, (user) => user.avatar)
  user: User
}