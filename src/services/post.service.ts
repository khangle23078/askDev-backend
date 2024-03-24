import { dataSouce } from "./../configs/typeorm.config"
import { Post } from "./../entities/post.entity"

const postRepository = dataSouce.getRepository(Post)

export const getAll = () => {
  return postRepository.find()
}