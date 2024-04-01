import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'post_likes' })
export class PostLike {
  @PrimaryGeneratedColumn()
  id: number


}