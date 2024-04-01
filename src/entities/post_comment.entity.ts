import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";
import { validateOrReject } from "class-validator";
import { ReplyComment } from "./reply_comment.entity";

@Entity({ name: 'post_comments' })
export class PostComment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: 'post_id' })
  post: Post

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(() => ReplyComment, (replyComment) => replyComment.commnent)
  replyComment: ReplyComment[]

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this)
  }
}