import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostComment } from "./post_comment.entity";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity({ name: 'reply_comments' })
export class ReplyComment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @ManyToOne(() => PostComment, (postComment) => postComment.replyComment)
  @JoinColumn({ name: 'comment_parent_id' })
  commnent: PostComment

  @ManyToOne(() => Post, (post) => post.replyComments)
  @JoinColumn({ name: 'post_id' })
  post: Post

  @ManyToOne(() => User, (user) => user.replyComments)
  @JoinColumn({ name: 'user_id' })
  user: User

  @CreateDateColumn({ name: 'create_at' })
  createAt: Date

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: Date
}