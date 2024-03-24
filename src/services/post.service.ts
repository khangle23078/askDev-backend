import { dataSouce } from "./../configs/typeorm.config"
import { Post } from "./../entities/post.entity"

const postRepository = dataSouce.getRepository(Post)

export const getAll = () => {
  return postRepository.find()
}

export const getById = (post_id: number) => {
  return postRepository.findOneBy({ id: post_id })
}