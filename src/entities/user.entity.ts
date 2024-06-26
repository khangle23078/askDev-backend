import bcrypt from 'bcryptjs';
import { IsEmail, IsNotEmpty, Length, validateOrReject } from "class-validator";
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Image } from "./image.entity";
import { UserSocialLink } from "./user_social_link.entity";
import { Post } from './post.entity';
import { PostComment } from './post_comment.entity';
import { ReplyComment } from './reply_comment.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'user_name' })
  @Length(6, 20)
  @IsNotEmpty()
  userName: string

  @Column({ name: 'email' })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @OneToOne(() => Image, (image) => image.user)
  @JoinColumn({ name: 'avatar' })
  avatar: Image

  @Column({ name: 'password' })
  @Length(6, 100)
  @IsNotEmpty()
  password: string

  @OneToOne(() => UserSocialLink, (userSocialLink) => userSocialLink.user)
  @JoinColumn({ name: 'social_links' })
  socialLinks: UserSocialLink

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]

  @OneToMany(() => PostComment, (postCommment) => postCommment.user)
  comments: PostComment[]

  @OneToMany(() => ReplyComment, (replyComment) => replyComment.user)
  replyComments: ReplyComment[]

  @Column({ name: 'create_at' })
  @CreateDateColumn()
  createAt: string

  @Column({ name: 'update_at' })
  @UpdateDateColumn()
  updateAt: string

  @BeforeInsert()
  async hashPassword(): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return this.password = await bcrypt.hash(this.password, salt)
  }

  static comparePassword(hashedpassword: string, newPassword: string) {
    return bcrypt.compare(newPassword, hashedpassword)
  }

  @BeforeInsert()
  @BeforeUpdate()
  async validation() {
    await validateOrReject(this)
  }
}