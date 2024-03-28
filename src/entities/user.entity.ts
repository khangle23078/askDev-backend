import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserSocialLink } from "./user_social_link.entity";
import { Image } from "./image.entity";
import { IsEmail, IsNotEmpty, Length, validateOrReject } from "class-validator";
import bcrypt from 'bcryptjs'

@Entity({ name: 'users' })
export class User {
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

  @BeforeInsert()
  @BeforeUpdate()
  async validation() {
    await validateOrReject(this)
  }
}