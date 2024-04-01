import { validateOrReject } from "class-validator";
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostImage } from "./post_image.entity";
import { User } from "./user.entity";
import { PostComment } from "./post_comment.entity";
import { ReplyComment } from "./reply_comment.entity";

@Entity({ name: 'posts' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @OneToOne(() => PostImage, (image) => image.post, { cascade: true })
  @JoinColumn({ name: 'post_image_id' },)
  image: PostImage

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(() => PostComment, (postcomment) => postcomment.post)
  comments: PostComment[]

  @OneToMany(() => ReplyComment, (replyComment) => replyComment.post)
  replyComments: ReplyComment[]

  @Column({ name: 'likes', default: 0 })
  likes: number

  @CreateDateColumn({ name: 'create_at' })
  createAt: Date

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: Date


  @BeforeInsert()
  @BeforeUpdate()
  async validation() {
    await validateOrReject(this)
  }
}