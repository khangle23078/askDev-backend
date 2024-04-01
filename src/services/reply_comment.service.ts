import { ReplyComment } from "../entities/reply_comment.entity"

export const insert = (commentParentId: number, postId: number, userId: number, data: any) => {
  const replyComment = ReplyComment.create({ ...data, comment: commentParentId, post: postId, user: userId })
  return ReplyComment.save(replyComment)
}