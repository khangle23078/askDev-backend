import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: 'user_social_links' })
export class UserSocialLink {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'github_link' })
  githubLink: string

  @Column({ name: 'linkedin_link' })
  linkedinLink: string

  @Column({ name: 'portfolio_link' })
  portfolioLink: string

  @OneToOne(() => User, (user) => user.socialLinks)
  user: User
}