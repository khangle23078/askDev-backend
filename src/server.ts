import express, { Application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'
import postRoute from './routes/post.route'
import { connectDB } from './configs/typeorm.config'

const app: Application = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('common'))
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(postRoute)

connectDB()

const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}!!`);
})