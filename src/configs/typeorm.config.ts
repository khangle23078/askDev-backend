import { DataSource } from "typeorm";
import 'dotenv/config'

export const dataSouce = new DataSource({
  type: 'mysql',
  host: process.env.LOCAL_DB_HOST,
  port: 3306,
  database: process.env.LOCAL_DB_NAME,
  username: process.env.LOCAL_DB_USERNAME,
  password: process.env.LOCAL_DB_PASSWORD,
  entities: [__dirname + "./../**/*.entity.{js,ts}"],
  synchronize: true,
})

export const connectDB = async () => {
  try {
    await dataSouce.initialize()
    console.log('Connect database success!!');
  } catch (error) {
    console.log('Something wrong when connect database!!', error);
  }
}