import { Post } from "./../entities/post.entity"

export const getAll = () => {
  return Post.find()
}

export const getById = (post_id: number) => {
  return Post.findOneBy({ id: post_id })
}

export const insert = (userId: number, data: any) => {
  const newPost = Post.create({ ...data, userId: userId })
  return Post.save(newPost)
}