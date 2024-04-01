import express, { Application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'
import postRoute from "./routes/post.route"
import authRoute from './routes/auth.route'
import commentRoute from './routes/comment.route'
import replyCommentRoute from './routes/reply_comment.route'
import { connectDB } from './configs/typeorm.config'
import 'dotenv/config'
const app: Application = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('common'))
app.use(helmet())
app.use(compression())
app.use(cors())
app.use("/api/v1/posts", postRoute)
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/comments", commentRoute)
app.use("/api/v1/reply-comments", replyCommentRoute)
connectDB()

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}!!`);
})