import { Post } from "./../entities/post.entity"

export const getAll = () => {
  return Post.find({
    relations: {
      user: true,
      image: true
    },
    order: {
      createAt: "DESC"
    }
  })
}

export const getById = (post_id: number) => {
  return Post.findOne({
    where: {
      id: post_id,
    },
    relations: {
      user: true,
      image: true
    }
  })
}

export const insert = (userId: number, data: any) => {
  const newPost = Post.create({ ...data, userId: userId })
  return Post.save(newPost)
}

export const deleteById = (postId: number) => {
  return Post.delete(postId)
}